import express from 'express';
import { StudentsController } from './students.controller';
const router = express.Router();
// will call controller func
router.post('/create-student', StudentsController.createStudent);
router.get('/', StudentsController.getAllStudents);
router.get('/:studentId', StudentsController.getSingleStudents);

export const StudentsRoutes = router;
