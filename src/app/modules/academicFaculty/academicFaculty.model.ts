/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

academicFacultySchema.pre('save', async function (next) {
  const isFacultyExixt = await AcademicFaculty.findOne({
    name: this.name,
  });
  if (isFacultyExixt) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Faculty is Alrady Exits!');
  }
  next();
});

academicFacultySchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isFacultyExixt = await AcademicFaculty.findOne(query);
  if (!isFacultyExixt) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Faculty does not exist!');
  }
  next();
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
