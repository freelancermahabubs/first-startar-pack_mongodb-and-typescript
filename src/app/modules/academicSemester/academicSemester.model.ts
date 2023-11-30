/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';

import { TAcademicSemseter } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<TAcademicSemseter>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      requiredPaths: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester is already exists !');
  }
  next();
});

academicSemesterSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isSemesterExists = await AcademicSemester.findOne(query);
  if (!isSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Semester does not exist!');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemseter>(
  'AcademicSemester',
  academicSemesterSchema,
);
