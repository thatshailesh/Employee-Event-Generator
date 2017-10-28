const express = require('express');
const router = express.Router();
const EventsGenerator = require('../services/EventsGenerator');
const ValidationService = require('../services/Validation');

const env = process.env.NODE_ENV;
const validationServiceInstance = new ValidationService();
const workerRoute = router.route('/worker/events')

workerRoute
    .post(validationServiceInstance.validatePayload.bind(validationServiceInstance))
    .post(EventsGenerator.generateWorkerEvents.bind(EventsGenerator))
    .post(EventsGenerator.generateWorkerEventsWithRangeHolidays.bind(EventsGenerator))

module.exports = router;