'use strict';

exports.rangeBasedConfig = {
    "employeeName": "Robert",
   "forecastedHolidays": {
       "startDate": "2017-12-13",
       "endDate": "2017-12-15"
   },
   "country": "FI",
   "workEventPeriod": {
       "startDate": "2017-12-08",
       "endDate": "2017-12-31"
   }
};

exports.listBasedConfig = {
    "employeeName": "Robert",
    "forecastedHolidays": ["2017-12-09", "2017-12-10", "2017-12-08", "2017-12-11","2017-12-28"],
    "country": "FI",
    "workEventPeriod": {
        "startDate": "2017-12-01",
        "endDate": "2017-12-31"
    }
};

exports.workeEvents_Range = {
    "employeeName": "Robert",
    "workingEvents": [
        {
            "date": "2017-12-08T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-09T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-10T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-11T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-12T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-13T00:00:00Z",
            "isWeekend": false,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-14T00:00:00Z",
            "isWeekend": false,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-15T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-16T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-17T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-18T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-19T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-20T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-21T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-22T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-23T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-24T00:00:00Z",
            "isWeekend": true,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-25T00:00:00Z",
            "isWeekend": false,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-26T00:00:00Z",
            "isWeekend": false,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-27T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-28T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-29T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-30T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        }
    ]
};

exports.workeEvents_List = {
    "employeeName": "Robert",
    "workingEvents": [
        {
            "date": "2017-12-01T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-02T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-03T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-04T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-05T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-06T00:00:00Z",
            "isWeekend": false,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-07T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-08T00:00:00Z",
            "isWeekend": false,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-09T00:00:00Z",
            "isWeekend": true,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-10T00:00:00Z",
            "isWeekend": true,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-11T00:00:00Z",
            "isWeekend": false,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-12T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-13T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-14T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-15T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-16T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-17T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-18T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-19T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-20T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-21T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-22T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-23T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        },
        {
            "date": "2017-12-24T00:00:00Z",
            "isWeekend": true,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-25T00:00:00Z",
            "isWeekend": false,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-26T00:00:00Z",
            "isWeekend": false,
            "event": "Public Holiday"
        },
        {
            "date": "2017-12-27T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-28T00:00:00Z",
            "isWeekend": false,
            "event": "Employee Holiday"
        },
        {
            "date": "2017-12-29T00:00:00Z",
            "isWeekend": false,
            "event": "Working"
        },
        {
            "date": "2017-12-30T00:00:00Z",
            "isWeekend": true,
            "event": "Working"
        }
    ]
};    