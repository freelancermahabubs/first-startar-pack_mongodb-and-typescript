import { Request, Response } from 'express';
import { StudentsServices } from './students.srvice';
// import studentsValidationSchema from './students.validation';

import studentsValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validatin using joi
    // creating a schema validatin using zod
 

    const { students: studentData } = req.body;

    // data validation using joi 
    // data validation using zod 


    const zodParseData = studentsValidationSchema.parse(studentData)
    // const { error, value } = studentsValidationSchema.validate(studentData);
    const result = await StudentsServices.createStudentIntoDB(zodParseData); 

    
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong!',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student Created Successfully !',
      data: result,
    });
  } catch (err: any) {
     res.status(500).json({
        success: false,
        message: err.message ||  'something went wrong!',
        error: err,
      });
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
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error: error,
    });
  }
};
export const StudentsController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
