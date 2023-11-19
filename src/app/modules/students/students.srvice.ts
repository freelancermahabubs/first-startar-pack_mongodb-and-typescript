import { Students } from './students.Model';
import { TStudents } from './students.interface';

const createStudentIntoDB = async (studentData: TStudents) => {
  if (await Students.isUserExists(studentData.id)) {
    throw new Error('User already Exists!');
  }
  const result = await Students.create(studentData); //built in static methoad

  // static method

  // const student = new Students(studentData); // create an instance
  // if (await student.isUserExists(studentData.id)) {
  //  throw new Error ('User already Exists!')
  // }

  // const result = await student.save(); //build in instance methoad provide mongosses
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await Students.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Students.findOne({ id });
  return result;
};

export const StudentsServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
