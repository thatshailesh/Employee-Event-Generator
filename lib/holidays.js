'use strict';
const dateHolidays = require('date-holidays');
const moment = require('moment');
class Holidays {
    static isHoliday(country, date) {
        if (country && moment(date).isValid()) {
            const holidayInst = dateHolidays(country);
            
            return holidayInst.isHoliday(new Date(date));
        }
        throw new Error('Missing Parameters or Invalid');
    }
}

module.exports = Holidays;