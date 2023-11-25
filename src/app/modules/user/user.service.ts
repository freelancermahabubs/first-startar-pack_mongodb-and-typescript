import config from '../../config';
import { Student } from '../students/students.Model';
import { TStudents } from './../students/students.interface';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (
  password: string,
  studentData: TStudents,
) => {
  //create a user object

  const userData: Partial<TUser> = {};

  // if passwrod is not fiven, use default passwrod

  userData.password = password || (config.default_password as string);

  //   set a student  role

  userData.role = 'student';

  //   set manually generated id

  userData.id = '20301001';

  //   crate a user
  const newUser = await User.create(userData);

  //   crate a student

  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser?.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
