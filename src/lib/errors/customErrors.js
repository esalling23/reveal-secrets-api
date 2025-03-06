"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingSecretError = void 0;
class MissingSecretError extends Error {
    constructor() {
        super();
        this.name = 'Missing Secret Error';
        this.message = 'No secret found within the request :^|';
    }
}
exports.MissingSecretError = MissingSecretError;
