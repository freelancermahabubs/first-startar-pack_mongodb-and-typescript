import { StudentsServices } from './students.srvice';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
// import studentsValidationSchema from './students.validation';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentsServices.getAllStudentsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrived Succesfully!',
    data: result,
  });
});
const getSingleStudents = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentsServices.getSingleStudentsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrived Succesfully!',
    data: result,
  });
});
const updateSudents = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentsServices.updateStudentsFromDB(
    id,
    student,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated Succesfully!',
    data: result,
  });
});
const deletetSudents = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentsServices.deleteStudentsFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted Succesfully!',
    data: result,
  });
});
export const StudentsController = {
  getAllStudents,
  getSingleStudents,
  updateSudents,
  deletetSudents,
};
