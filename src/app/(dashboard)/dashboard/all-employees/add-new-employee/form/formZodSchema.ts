import { z } from "zod";

export type EmployeeFormValues = z.infer<typeof employeeZodSchema>;

export const employeeZodSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Need valid email' }),
  role: z.enum(['ADMIN', 'USER', 'MANAGER']),
  department: z.string().min(2, { message: 'Department is required' }),
  isActive: z.boolean()
});
