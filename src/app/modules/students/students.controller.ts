import { Request, Response } from 'express';
import { StudentsServices } from './students.srvice';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { students: studentData } = req.body;

    const result = await StudentsServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student Created Successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentsServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrived Succesfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentsServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student are retrived Succesfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentsController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
