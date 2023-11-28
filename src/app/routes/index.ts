import { Router } from 'express';

import { UserRoutes } from '../modules/user/user.route';
import { StudentsRoutes } from '../modules/students/stundents.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/students', route: StudentsRoutes },
  { path: '/academic-semesters', route: AcademicSemesterRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)); 

export default router;
