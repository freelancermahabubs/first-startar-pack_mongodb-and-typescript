import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';
import auth from '../../middlwares/auth';



const router = express.Router();

router.post(
  '/create-course',
  auth('admin'),
  validateRequest(
    CourseValidations.createCourseValidationSchema,
  ),
  CourseControllers.createCourse,
);
router.get('/:id', auth('student', 'faculty', 'admin'), CourseControllers.getSingleCourses);
router.patch(
  '/:id',
  auth( 'admin'),
  validateRequest(
    CourseValidations.updateCourseValidationSchema,
  ),
  CourseControllers.updateCourse,
);

router.put('/:courseId/assing-faculties', validateRequest(CourseValidations.facultiesWithCoruseValidationSchema), CourseControllers.assignFaculties)
router.delete('/:courseId/remove-faculties', validateRequest(CourseValidations.facultiesWithCoruseValidationSchema), CourseControllers.assignFaculties)
router.delete('/:id', auth('admin'), CourseControllers.deleteCourse);
router.get('/', CourseControllers.getAllCourses);


export const CourseRoutes = router;
