# Employee Event Generator

To forecast upcoming payrolls, our customers want to feed their payroll systems with future work events from their full-time employees, considering bank holidays and employees’ holidays. Implement a program that generates these events for employees in your home country or Estonia.

# Getting Started!

  - Clone the repo
  - cd && npm install

## Code Overview

### Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [body-parser](https://www.npmjs.com/package/body-parser) - To parse the payload send along the post requests
- [chai](https://www.npmjs.com/package/chai) - To write unit and acceptance tests
- [bluebird](https://www.npmjs.com/package/bluebird) - To handle promises
- [date-holiday](https://www.npmjs.com/package/date-holidays) - To get the public or bank holidays for specific country
- [Joi](https://www.npmjs.com/package/joi) - To validate JSON schema
- [moment](https://www.npmjs.com/package/moment) - To handle date formats and validation
 
## Application Structure

- `api.js` - The entry point to our application. This file defines our express server. It also requires the routes we'll be using in the application.
- `lib/` - This folder contains custom library files used as utility.
- `routes/` - This folder contains the route definitions for our API.
- `services/` - This folder contains the services provided by the API.
- `middlewares/` - This folder contain middleware files responsible for handling errors
- `tests/` - This folder contains Accpetance and unit test files for the API
This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

## Endpoints

#### POST: api/worker/events

```sh
returns: an object and collection of generated work events for the given period including forecasted holidays and weekend as an object
```
#### Body: 
```` javascript
{
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
}

````
**OR**

```` javascript
{
    "employeeName": "Robert",
    "forecastedHolidays": ["2017-12-09", "2017-12-10", "2017-12-08", "2017-12-11","2017-12-28"],
    "country": "FI",
    "workEventPeriod": {
        "startDate": "2017-12-01",
        "endDate": "2017-12-31"
    }
}

````

## Tests
> Run `npm install mocha -g`
> Run `mocha tests`

License
----

MIT


**Free Software, Hell Yeah!**
