import express from 'express';

import { UserControllers } from './user.controller';
import { studentsValidations } from '../students/student.validation';


import { createAdminValidationSchema } from '../Admin/admin.validation';
import { facultyValidations } from '../Faculty/faculty.validation';
import validateRequest from '../../middlwares/validateRequest';
import auth from '../../middlwares/auth';
import { USER_ROLE } from './user.constant';
const router = express.Router();

router.post(
  '/create-student', auth(USER_ROLE.admin),
  validateRequest(studentsValidations.createStudentsValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',  auth(USER_ROLE.admin),
  validateRequest(facultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

export const UserRoutes = router;
