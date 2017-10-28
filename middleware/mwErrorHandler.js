'use strict';

function mwErrorHandler(err, req, res, next) {
    if (err) {
        if (process.env.NODE_ENV === 'development') {
            console.error(err);
        }
        return res.status(400).json({
            code: 400,
            status: "Failed",
            message: err.message,
        });
    }
    next();
}
module.exports = mwErrorHandler;