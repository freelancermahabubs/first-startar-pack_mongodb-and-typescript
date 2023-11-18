import { StudentsModel } from './students.Model';
import { Students } from './students.interface';

const createStudentIntoDB = async (students: Students) => {
  const result = await StudentsModel.create(students);
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await StudentsModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentsModel.findOne({ id });
  return result;
};

export const StudentsServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
