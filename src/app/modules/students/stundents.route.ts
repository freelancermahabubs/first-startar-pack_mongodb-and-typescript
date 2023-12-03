import express from 'express';
import { StudentsController } from './students.controller';
import validateRequest from '../../middlwares/validateRequest';
import { studentsValidations } from './student.validation';
const router = express.Router();
// will call controller func

router.get('/', StudentsController.getAllStudents);
router.get('/:studentId', StudentsController.getSingleStudents);
router.patch(
  '/:studentId',
  validateRequest(studentsValidations.updateStudentValidationSchema),
  StudentsController.updateSudents,
);
router.delete('/:studentId', StudentsController.deletetSudents);

export const StudentsRoutes = router;
