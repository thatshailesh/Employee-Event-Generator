"use strict";

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Acceptance Tests', () => {
    describe('Work Event generation Endpoints (/worker/events)', () => {

        it('should return a 404 error for wrong http method', (done) => {
            chai.request(server)
                .get('/temp_endpoint')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('should return a 400 error for post request with a field is empty', (done) => {
            chai.request(server)
                .post('/api/worker/events')
                .send({
                    "employeeName": "",
                    "forecastedHolidays": {
                        "startDate": "2017-12-13",
                        "endDate": "2017-12-15"
                    },
                    "country": "FI",
                    "workEventPeriod": {
                        "startDate": "2017-12-08",
                        "endDate": "2017-12-31"
                    }
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an("object");
                    res.body.should.have.own.property("message");
                    done();
                });
        });

        it('should return a 400 code if start date and end date are the same', (done) => {
            chai.request(server)
                .post('/api/worker/events')
                .send({
                    "employeeName": "Robert",
                    "forecastedHolidays": {
                        "startDate": "2017-12-15",
                        "endDate": "2017-12-15"
                    },
                    "country": "FI",
                    "workEventPeriod": {
                        "startDate": "2017-12-31",
                        "endDate": "2017-12-31"
                    }
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('should return a 200 code and an object with generated work period for forecasted holidays an object', (done) => {
            let result = require('./stub').workeEvents_Range;
            chai.request(server)
                .post('/api/worker/events')
                .send({
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
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.deep.equal(result);
                    done();
                });
        });

        it('should return a 200 code and an object with generated work period for forecasted holidays an object', (done) => {
            let result = require('./stub').workeEvents_List;
            chai.request(server)
                .post('/api/worker/events')
                .send({
                    "employeeName": "Robert",
                    "forecastedHolidays": ["2017-12-09", "2017-12-10", "2017-12-08", "2017-12-11","2017-12-28"],
                    "country": "FI",
                    "workEventPeriod": {
                        "startDate": "2017-12-01",
                        "endDate": "2017-12-31"
                    }
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.deep.equal(result);
                    done();
                });
        });
    })
})