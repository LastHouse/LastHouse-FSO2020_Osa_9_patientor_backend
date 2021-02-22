/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  try {
    const id: string = req.params.id;
    const singlePatient = patientsService.getPatient(id);
    res.json(singlePatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
