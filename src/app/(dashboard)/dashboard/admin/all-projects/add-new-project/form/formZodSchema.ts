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
  status: ProjectStatus,
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.number()
});

export type ProjectFormValues = z.infer<typeof projectZodSchema>;
