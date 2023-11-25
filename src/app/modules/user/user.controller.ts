/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { passwrod, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      passwrod,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student Created Successfully !',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
