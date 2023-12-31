import { z } from 'zod';

const CreateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Faculty must be sting' }),
  }),
});
const UpdateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Academic Faculty must be sting' })
      .optional(),
  }),
});
export const AcademicFacultyValidation = {
  CreateAcademicFacultyValidationSchema,
  UpdateAcademicFacultyValidationSchema,
};
