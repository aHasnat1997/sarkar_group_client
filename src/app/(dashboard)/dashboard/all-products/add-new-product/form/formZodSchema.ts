import { z } from "zod";

export const productZodSchema = z.object({
  equipmentName: z.string().min(2, { message: 'project name must be at least 2 characters' }),
  registrationNumber: z.string().min(2, { message: 'department type must be at least 2 characters' }),
  category: z.string().min(2, { message: 'client must be at least 2 characters' }),
  ownerName: z.string().min(2, { message: 'working days must be at least 2 characters' }),
  ownerAddress: z.string().min(2, { message: 'working days must be at least 2 characters' }),
  ownerNumber: z.string().min(2, { message: 'product type must be at least 2 characters' }),
  charteredBy: z.string().min(2, { message: 'project type must be at least 2 characters' }),
  charteredPersonPhone: z.string().min(2, { message: 'address must be at least 2 characters' }),
  charteredPersonAddress: z.string().min(2, { message: 'city must be at least 2 characters' }),
  brandName: z.string().min(2, { message: 'state must be at least 2 characters' }),
  model: z.string().min(2, { message: 'state must be at least 2 characters' }),
  dimensions: z.string().min(2, { message: 'state must be at least 2 characters' }),
  manufacturingYear: z.string().min(2, { message: 'state must be at least 2 characters' }),
  status: z.string().min(2, { message: 'email must be at least 2 characters' }),
});

export type ProductFormValues = z.infer<typeof productZodSchema>;