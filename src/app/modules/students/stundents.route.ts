import express from 'express';
import { StudentsController } from './students.controller';
const router = express.Router();
// will call controller func

router.get('/', StudentsController.getAllStudents);
router.get('/:studentId', StudentsController.getSingleStudents);
router.delete('/:studentId', StudentsController.deletetudents);

export const StudentsRoutes = router;
