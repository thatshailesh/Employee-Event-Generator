"use strict";

const Joi = require('joi');

class Validation {

    constructor () {
        this.JSONschema = Joi.object().keys({
            employeeName: Joi.string().min(3).example('Rob').required(),
            forecastedHolidays: [Joi.array().items(Joi.date().iso().required()),
                Joi.object().keys({
                    startDate: Joi.date().iso().required(),
                    endDate: Joi.date().iso().min(Joi.ref('startDate')).required()
                }).required()],
            country: Joi.string().min(2).max(2).example("US").required(),
            workEventPeriod: Joi.object().keys({
                startDate: Joi.date().iso().required(),
                endDate: Joi.date().iso().min(Joi.ref('startDate')).required()
            }).required()    
        }).with('workEventPeriod', 'forecastedHolidays')
    }

    validatePayload (req, res, next) {
        if (!req.body) {
            console.log('ValidatePayload.Error: Payload Missine')
            return res.status(400).json({
                code: 400,
                status: "Failed",
                message: "Payload Missing",
            });
        }
        const validate = Joi.validate(req.body, this.JSONschema);

        if (validate.error) {
            
            const message = validate.error.message;
            console.log('ValidatePayload.Error: ', message)
            return res.status(400).json({
                code: 400,
                status: "Failed",
                message,
            });
        }
        console.log('ValidatePayload.Success: Valid Payload')
        return next();
    }

    isValid(data) {
        return Joi.validate(data, this.JSONschema).error === null;
    }

    
}

module.exports = Validation;