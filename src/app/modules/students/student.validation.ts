import { z } from 'zod';
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(value => value.charAt(0).toUpperCase() + value.slice(1) === value, {
      message: 'First Name must be in capitalize format',
    }),
  middleName: z.string().optional(),
  lastName: z.string().min(10),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const studentsValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: userNameValidationSchema,
  gender: z
    .enum(['male', 'female', 'other'])
    .refine(value => typeof value === 'string', {
      message: 'Gender is not valid',
    }),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
    .refine(value => typeof value === 'string', {
      message: 'Blood Group is not valid',
    }),
  presentAddress: z.string().min(1),
  permanetAddress: z.string().min(1),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImage: z.string(),
  isActive: z.enum(['active', 'inActive']).default('active'),
  isDeleted: z.boolean(),
});

export default studentsValidationSchema;
