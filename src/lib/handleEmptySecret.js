"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customErrors_1 = require("./errors/customErrors");
const handleEmptySecret = (data) => {
    if (Object.keys(data).length === 0) {
        throw new customErrors_1.MissingSecretError();
    }
    return;
};
exports.default = handleEmptySecret;
