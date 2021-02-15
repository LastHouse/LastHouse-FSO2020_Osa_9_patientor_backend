"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientsService_1.default.getNonSensitivePatientData());
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = utils_1.default(req.body);
        const addedEntry = patientsService_1.default.addPatient(newPatientEntry);
        res.json(addedEntry);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
