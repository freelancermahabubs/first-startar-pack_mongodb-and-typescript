import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Students,
  UserName,
} from './students.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },

  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const studentsSchema = new Schema<Students>({
  id: { type: String },
  name: userNameSchema,

  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },

  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },

  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanetAddress: { type: String, required: true },
  guardian: guardianSchema,

  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: ['active', 'inActive'],
});

export const StudentsModel = model<Students>('Students', studentsSchema);
