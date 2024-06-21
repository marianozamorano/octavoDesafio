// src/errorHandler.js
const { ERROR_MESSAGES, CustomError } = require('./errors.js');

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(400).json({
            error: err.code,
            message: err.message
        });
    } else {
        console.error(err);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Algo salió mal'
        });
    }
};

module.exports = errorHandler;
