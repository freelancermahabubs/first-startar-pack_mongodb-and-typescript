import express, { NextFunction, Request, Response } from 'express';

import { UserControllers } from './user.controller';
import { studentsValidations } from '../students/student.validation';

import { createAdminValidationSchema } from '../Admin/admin.validation';
import { facultyValidations } from '../Faculty/faculty.validation';
import validateRequest from '../../middlwares/validateRequest';
import auth from '../../middlwares/auth';
import { USER_ROLE } from './user.constant';
import { UserValidation } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
const router = express.Router();

router.post(
  '/create-student', 
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
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
router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);
router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

export const UserRoutes = router;
