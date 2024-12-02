import { z } from "zod";

export const projectZodSchema = z.object({
  projectName: z.string().min(2, { message: 'project name must be at least 2 characters' }),
  department: z.string().min(2, { message: 'department type must be at least 2 characters' }),
  client: z.string().min(2, { message: 'client must be at least 2 characters' }),
  email: z.string().min(2, { message: 'email must be at least 2 characters' }),
  startingDate: z.string().min(2, { message: 'working days must be at least 2 characters' }),
  estimatedFinishDate: z.string().min(2, { message: 'working days must be at least 2 characters' }),
  productType: z.string().min(2, { message: 'product type must be at least 2 characters' }),
  projectType: z.string().min(2, { message: 'project type must be at least 2 characters' }),
  address: z.string().min(2, { message: 'address must be at least 2 characters' }),
  city: z.string().min(2, { message: 'city must be at least 2 characters' }),
  state: z.string().min(2, { message: 'state must be at least 2 characters' }),
  zip: z.string().min(2, { message: 'state must be at least 2 characters' }),
});

export type ProjectFormValues = z.infer<typeof projectZodSchema>;
