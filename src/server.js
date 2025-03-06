"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const secrets_1 = __importDefault(require("./routes/secrets"));
const errorHandler_1 = __importDefault(require("./lib/errors/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
app.use('/reveal/your/secrets', secrets_1.default);
app.use(errorHandler_1.default);
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
