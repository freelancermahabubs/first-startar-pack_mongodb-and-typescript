import express from 'express';

import { UserControllers } from './user.controller';
import { studentsValidations } from '../students/student.validation';
import validateRequest from '../../middlwares/validateRequest';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentsValidations.createStudentsValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
