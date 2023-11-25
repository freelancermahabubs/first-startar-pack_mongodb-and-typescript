/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StudentsServices } from './students.srvice';
// import studentsValidationSchema from './students.validation';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentsServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrived Succesfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentsServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student are retrived Succesfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deletetudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentsServices.deleteStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is deleted Succesfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const StudentsController = {
  getAllStudents,
  getSingleStudents,
  deletetudents,
};
