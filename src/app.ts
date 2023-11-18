import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './app/modules/students/stundents.route';

const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());
// application Routes

app.use('/api/v1/students', StudentsRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', getAController);

export default app;
