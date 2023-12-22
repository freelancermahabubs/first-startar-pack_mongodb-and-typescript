import express from 'express';
import { StudentsController } from './students.controller';
import validateRequest from '../../middlwares/validateRequest';
import { studentsValidations } from './student.validation';
import auth from '../../middlwares/auth';
const router = express.Router();
// will call controller func

router.get('/', StudentsController.getAllStudents);
router.get('/:id', auth('admin', 'faculty'), StudentsController.getSingleStudents);
router.patch(
  '/:id',
  validateRequest(studentsValidations.updateStudentValidationSchema),
  StudentsController.updateSudents,
);
router.delete('/:id', StudentsController.deletetSudents);


export const StudentsRoutes = router;
