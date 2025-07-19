import { z } from "zod";

const Department = z.enum(['CIVIL', 'MARIN', 'ENGINEERING']);
const ProjectType = z.enum(['CIVIL', 'MARIN', 'ENGINEERING']);
const ProductType = z.enum(['CIVIL', 'MARIN', 'ENGINEERING']);
const ProjectStatus = z.enum([
  'NOT_STARTED',
  'IN_PROGRESS',
  'ON_HOLD',
  'COMPLETED',
  'CANCELLED',
  'DELAYED',
  'UNDER_REVIEW',
  'APPROVED',
  'ARCHIVED'
]);

export const projectZodSchema = z.object({
  projectName: z.string(),
  department: Department,
  clientId: z.string(),
  projectManagerId: z.string(),
  startDate: z.any(),
  estimatedEndDate: z.any(),
  projectType: ProjectType,
  productType: ProductType,
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.number()
});

export const projectUpdateSchema = z.object({
  projectName: z.string().optional(),
  department: Department.optional(),
  clientId: z.string().optional(),
  projectManagerId: z.string().optional(),
  startDate: z.any().optional(),
  estimatedEndDate: z.any().optional(),
  projectType: ProjectType.optional(),
  productType: ProductType.optional(),
  status: ProjectStatus.optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.number().optional(),
});

export type ProjectFormValues = z.infer<typeof projectZodSchema>;
export type ProjectUpdateFormValues = z.infer<typeof projectUpdateSchema>;
