"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const jsonPayload_1 = require("../lib/db/jsonPayload");
const handleEmptySecret_1 = __importDefault(require("../lib/handleEmptySecret"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)();
router.post('/', upload.none(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, handleEmptySecret_1.default)(req.body);
        const payload = yield (0, jsonPayload_1.createPayload)(req.body);
        res.status(200).send({ secrets: payload });
    }
    catch (err) {
        next(err);
    }
}));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, handleEmptySecret_1.default)(req.query);
        const payload = yield (0, jsonPayload_1.createPayload)(req.query);
        res.status(200).send({ secrets: payload });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
