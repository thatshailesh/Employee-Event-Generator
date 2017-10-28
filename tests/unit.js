"use strict";

const chai = require('chai');
const expect = chai.expect;
process.env.NODE_ENV = 'test';

describe('Unit Tests', () => {
    describe('Date Event Generators', () => {
        const holidayLib = require('../lib/holidays');

        it('should return an error when no argument or Invalid argument is passed', function () {
            expect(() => holidayLib.isHoliday()).to.throw("Missing Parameters or Invalid");
        });

        it('should return true when date provided is a holiday', function () {
            expect(() => holidayLib.isHoliday("FI", "2017-12-26T00:00:00Z")).to.not.equal(null);
        });
    });

    describe('Work Events generators', () => {
        const generator = require('../services/EventsGenerator');

        describe('Generate Work events for Ranged Based employee holidays', () => {
            const stub = require('./stub').rangeBasedConfig;
            it('should throw an error if forcastedHolidays is not an array', function () {
                expect(() => generator.moveDatesFromArraytoMap(stub.forecastedHolidays)).to.throw("Forcasted holidays is expected to be an array");
            });

            it('should return an object with employee name and an array of work event objects', function () {
                const {
                    startDate: holidayStart,
                    endDate: holidayEnd
                } = stub.forecastedHolidays;
        
                let empHolidays = generator.getEmployeeHolidaysMap(holidayStart, holidayEnd);
                return generator
                    .getEventStatus(stub.employeeName, stub.workEventPeriod, empHolidays, stub.country)
                    .then((result) => {
                        expect(result).to.have.property('employeeName', 'Robert').and.to.haveOwnProperty('workingEvents').be.an('array');
                    })
                    .catch(function (err) {
                    });
            });
        })

        describe('Generate Work events for list of employee holidays', () => {
            const stub = require('./stub').listBasedConfig;

            it('should throw an error when no argument or Invalid argument is passed', function () {
                expect(() => generator.getEmployeeHolidaysMap('')).to.throw("Missing Params or Invalid Date");
            });

            it('should return an object with employee name and an array of work event objects', function () {
                const empHolidays = generator.moveDatesFromArraytoMap(stub.forecastedHolidays)
                return generator
                    .getEventStatus(stub.employeeName, stub.workEventPeriod, empHolidays, stub.countrycountry)
                    .then((result) => {
                        expect(result).to.have.property('employeeName', 'Robert').and.to.haveOwnProperty('workingEvents').be.an('array');
                    })
                    .catch(function (err) {
                    });
            });
        });
    })

    describe('JSON Payload Validation', () => {
        let ValidationService = require('../services/Validation');
        const validationServiceInstance = new ValidationService();
        it('should return true for json config 1', function () {
            const c1 = {
                "employeeName": "Robert",
                "forecastedHolidays": ["2017-12-09", "2017-12-10", "2017-12-08", "2017-12-11","2017-12-28"],
                "country": "FI",
                "workEventPeriod": {
                    "startDate": "2017-12-01",
                    "endDate": "2017-12-31"
                }
            };
            expect(validationServiceInstance.isValid(c1)).to.be.true;
        });

        it('should return false for json config 3 with invalid country', function () {
            const c2 = {
                "employeeName": "Robert",
                "forecastedHolidays": {
                    "startDate": "2017-12-13",
                    "endDate": "2017-12-15"
                },
                "country": "F",
                "workEventPeriod": {
                    "startDate": "2017-12-08",
                    "endDate": "2017-12-31"
                }
            };
            expect(validationServiceInstance.isValid(c2)).to.be.false;
        });
    })
})