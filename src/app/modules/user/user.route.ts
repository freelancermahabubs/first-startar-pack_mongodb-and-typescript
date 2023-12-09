import express from 'express';

import { UserControllers } from './user.controller';
import { studentsValidations } from '../students/student.validation';
import validateRequest from '../../middlwares/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentsValidations.createStudentsValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
