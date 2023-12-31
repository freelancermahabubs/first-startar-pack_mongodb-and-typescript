import express from 'express';


import { EnrolledCourseControllers } from './enrolledCourse.controller';
import { EnrolledCourseValidations } from './enrolledCourse.validaton';
import auth from '../../middlwares/auth';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-enrolled-course',
  auth('student'),
  validateRequest(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema,
  ),
  EnrolledCourseControllers.createEnrolledCourse,
);

router.patch(
  '/update-enrolled-course-marks',
  auth('faculty'),
  validateRequest(
    EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema,
  ),
  EnrolledCourseControllers.updateEnrolledCourseMarks,
);

export const EnrolledCourseRoutes = router;