"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const patients_1 = __importDefault(require("../data/patients"));
const patients_2 = __importDefault(require("../data/patients"));
const patients = patients_2.default;
const getPatients = () => {
    return patients;
};
const getPatient = (id) => {
    const patient = patients.filter((patient) => patient.id === id);
    return patient;
};
const getNonSensitivePatientData = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries,
    }));
};
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ id: uuid_1.v4() }, entry);
    patients_1.default.push(newPatientEntry);
    return newPatientEntry;
};
exports.default = {
    getPatients,
    getNonSensitivePatientData,
    addPatient,
    getPatient,
};
