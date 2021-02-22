import { v4 as uuid } from 'uuid';
import patientEntries from '../data/patients';
import patientsData from '../data/patients';

import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
  Patient,
} from '../types';

const patients: Array<Patient> = patientsData as Array<Patient>;

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const getPatient = (id: string): Array<Patient> => {
  const patient = patients.filter((patient) => patient.id === id);
  return patient;
};

const getNonSensitivePatientData = (): Array<NonSensitivePatientEntry> => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const addPatient = (entry: NewPatientEntry): Patient => {
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
  getPatient,
};
