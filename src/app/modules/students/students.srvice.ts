import mongoose from 'mongoose';
import { Student } from './students.Model';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicfaculty',
      },
    });
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Students.findOne({ id });
  // Aggregate

  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicfaculty',
      },
    });
  return result;
};
const deleteStudentsFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if(!deletedStudent){
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to Delete Student")
    }
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )
    if(!deletedUser){
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to Delete User")
    }
    await session.commitTransaction()
    await session.endSession()
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error('Failed to Delete student');
  }
};

export const StudentsServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
