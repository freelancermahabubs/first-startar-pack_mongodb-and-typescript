/* eslint-disable @typescript-eslint/no-explicit-any */

import catchAsync from '../../utils/catchAsync';
import { StudentsServices } from './students.srvice';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentsServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Student are retrived Succesfully!',
    data: result,
  });
});
const getSingleStudents = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentsServices.getSingleStudentsFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student are retrived Succesfully!',
    data: result,
  });
});
const deletetudents = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentsServices.deleteStudentsFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is deleted Succesfully!',
    data: result,
  });
});
export const StudentsController = {
  getAllStudents,
  getSingleStudents,
  deletetudents,
};
