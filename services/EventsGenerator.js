'use strict';
const holidayLib = require('../lib/holidays');
const moment = require('moment');
const Bluebird = require('bluebird');

class EventsGenerator {
    static generateWorkerEvents (req, res, next) {
        const { employeeName, forecastedHolidays, workEventPeriod, country } = req.body;

        if (forecastedHolidays instanceof Array) {
            const employeeHolidays = EventsGenerator.moveDatesFromArraytoMap(forecastedHolidays);

            return EventsGenerator.getEventStatus(employeeName, workEventPeriod, employeeHolidays, country)
                .then(result => {
                    return res.status(200).json(result);
                })
                .catch(err => {
                    return next(err);
                });
        }else if(forecastedHolidays.startDate && forecastedHolidays.endDate) {
            return next();
        }
        throw new Error('forecastedHolidays expected to be an array');
    }

    static generateWorkerEventsWithRangeHolidays (req, res, next) {
        const { employeeName, forecastedHolidays, workEventPeriod, country } = req.body;

        if (forecastedHolidays.startDate && forecastedHolidays.endDate) {
            const {
                startDate: holidayStart,
                endDate: holidayEnd
            } = forecastedHolidays;
    
            let employeeHolidays = EventsGenerator.getEmployeeHolidaysMap(holidayStart, holidayEnd);
            if (employeeHolidays.size) {
                return EventsGenerator.getEventStatus(employeeName, workEventPeriod, employeeHolidays, country)
                    .then(result => {
                        return res.status(200).json(result);
                    })
                    .catch(err => {
                        return next(err);
                    })
            }
            return next(new Error('Invalid Emp holidays'));
        }
        return next(new Error('forecastedHolidays expected to be an object'));
    }

    static getEventStatus(employeeName, eventPeriod, employeeHolidays, country) {
        let { startDate, endDate } = eventPeriod;
        
        startDate = moment(startDate)
        endDate = moment(endDate)
        
        return new Bluebird((resolve, reject) => {
            const result = {
                employeeName,
                workingEvents: []
            };
            for (let date = moment(startDate); date.diff(endDate) < 0; date.add(1, 'days')) {
                const utcDate = date.utc(date.format('YYYY-MM-DD')).format();
                const event = {
                    date: utcDate,
                    isWeekend: false
                };
                const day = moment(date).format('dddd');

                if (day === 'Saturday' || day === 'Sunday') {
                    event.isWeekend = true;
                }
                if (holidayLib.isHoliday(country, utcDate)) {
                    event.event = 'Public Holiday';
                }else if (employeeHolidays.has(utcDate)) {
                    event.event = 'Employee Holiday'
                }else {
                    event.event = 'Working';
                }
                result.workingEvents.push(event);
            }

            if (result.workingEvents.length) {
                resolve(result);
            }else {
                reject(result);
            }
        });
    }

    static moveDatesFromArraytoMap(holidays) {
        if (holidays instanceof Array && holidays.length) {
            const holidaysMap = new Map();
            
            holidays.forEach(val => {
                const date = moment(val).format('YYYY-MM-DD');
                const dateInUTC = moment.utc(date).format();
    
                if (!holidaysMap.has(dateInUTC)) {
                    holidaysMap.set(dateInUTC, 1);
                }
            })
    
            return holidaysMap;
        }
        throw new Error('Forcasted holidays is expected to be an array');
    }

    static getEmployeeHolidaysMap(start, end) {
        if (start && end && moment(start).isValid() && moment(end).isValid()) {
            let startDate = moment(start)
            let endDate = moment(end);
            let employeeHolidaysMap = new Map();
            
            for (let date = moment(startDate); date.diff(endDate) < 0; date.add(1, 'days')) {
                const utcDate = date.utc(date.format('YYYY-MM-DD')).format();
                
                if (!employeeHolidaysMap.has(utcDate)) {
                    employeeHolidaysMap.set(utcDate, 1);
                }
            }
            return employeeHolidaysMap;   
        }
        throw new Error('Missing Params or Invalid Date');
    }
}

module.exports = EventsGenerator;