import express from 'express';

import { UserControllers } from './user.controller';
import { studentsValidations } from '../students/student.validation';
import validateRequest from '../../middlwares/validateRequest';

import { createAdminValidationSchema } from '../Admin/admin.validation';
import { facultyValidations } from '../Faculty/faculty.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentsValidations.createStudentsValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(facultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
