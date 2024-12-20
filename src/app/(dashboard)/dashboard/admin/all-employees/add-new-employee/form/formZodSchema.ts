import { z } from "zod";

export type EmployeeFormValues = z.infer<typeof employeeZodSchema>;

export const employeeZodSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  profileImage: z.object({}).optional(),
  mobile: z.string().optional(),
  userName: z.string().optional(),
  dob: z.any().optional(),
  maritalStatus: z.string().optional(),
  gender: z.string().optional(),
  employeeType: z.string().optional(),
  department: z.string().optional(),
  designation: z.string().optional(),
  officeLocation: z.string().optional(),
  nationality: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.number().optional(),
  documents: z.array(z.object({})).optional(),
});
