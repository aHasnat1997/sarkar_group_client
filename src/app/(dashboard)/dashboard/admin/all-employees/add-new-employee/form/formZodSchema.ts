import { z } from "zod";

export type EmployeeFormValues = z.infer<typeof employeeZodSchema>;

export const employeeZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  profileImage: z.object({}).optional(),
  mobile: z.string(),
  userName: z.string(),
  dob: z.any(),
  maritalStatus: z.string(),
  gender: z.string(),
  employeeType: z.string(),
  department: z.string(),
  designation: z.string(),
  officeLocation: z.string(),
  nationality: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.number(),
  documents: z.array(z.object({})).optional(),
});
