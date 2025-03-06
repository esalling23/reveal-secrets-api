"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customErrors_1 = require("./customErrors");
const errorHandler = (error, _req, res) => {
    let errorStatus = 500;
    if (error instanceof customErrors_1.MissingSecretError) {
        errorStatus = 400;
    }
    res.status(errorStatus).json(error);
};
exports.default = errorHandler;
