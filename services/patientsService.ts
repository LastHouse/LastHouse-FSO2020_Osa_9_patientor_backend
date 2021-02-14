import patientsData from '../data/patients';

import { PatientEntry, NonSensitivePatientEntry } from '../types';

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

export default {
  getPatients,
  getNonSensitivePatientData,
};
