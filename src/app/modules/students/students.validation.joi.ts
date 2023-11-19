import Joi from 'joi';


const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .trim()
      .max(20)
      .pattern(/^[A-Z][a-z]*$/, 'capitalize')
      .message('{VALUE} is not in capitalize format'),
    middleName: Joi.string()
      .trim()
      .pattern(/^[A-Za-z]+$/, 'alpha')
      .message('{VALUE} is not valid'),
    lastName: Joi.string().required().trim(),
  });

  // Define the Joi schema for guardian
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().trim(),
    fatherOccupation: Joi.string().required().trim(),
    fatherContactNo: Joi.string().required().trim(),
    motherName: Joi.string().required().trim(),
    motherOccupation: Joi.string().required().trim(),
    motherContactNo: Joi.string().required().trim(),
  });

  // Define the Joi schema for localGuardian
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().trim(),
    occupation: Joi.string().required().trim(),
    contactNo: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  });

  // Define the Joi schema for Students
  const studentsValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().required().trim().valid('male', 'female', 'other'),
    dateOfBirth: Joi.string().trim(),
    email: Joi.string().required().trim().email(),
    contactNo: Joi.string().required().trim(),
    emergencyContactNo: Joi.string().required().trim(),
    bloodGroup: Joi.string()
      .required()
      .trim()
      .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'),
    presentAddress: Joi.string().required().trim(),
    permanetAddress: Joi.string().required().trim(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImage: Joi.string().trim(),
    isActive: Joi.string()
      .trim()
      .valid('active', 'inActive')
      .default('active'),
  });


  export default studentsValidationSchema