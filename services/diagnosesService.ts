import diagnosesData from '../data/diagnoses';

import { DiagnoseEntry } from '../types';

const diagnoses: Array<DiagnoseEntry> = diagnosesData as Array<DiagnoseEntry>;

const getDiagnoses = (): Array<DiagnoseEntry> => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
