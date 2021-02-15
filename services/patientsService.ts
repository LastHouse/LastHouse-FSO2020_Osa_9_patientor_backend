import { v4 as uuid } from 'uuid';
import patientEntries from '../data/patients';
import patientsData from '../data/patients';

import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from '../types';

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitivePatientData = (): Array<NonSensitivePatientEntry> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };

  patientEntries.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitivePatientData,
  addPatient,
};
