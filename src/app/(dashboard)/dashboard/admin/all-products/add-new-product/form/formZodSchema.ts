import { z } from "zod";

const ProductCategory = z.enum(["CIVIL", "MARIN", "ENGINEERING"]);
const EquipmentStatus = z.enum([
  "WORKING",
  "RUNNING",
  "STAND_BY",
  "BREAK_DOWN",
]);

export const productZodSchema = z.object({
  registrationNumber: z.string(),
  equipmentName: z.string(),
  category: ProductCategory,
  status: EquipmentStatus,
  ownerName: z.string(),
  ownerAddress: z.string(),
  ownerNumber: z.string(),
  charteredBy: z.string(),
  charteredPersonPhone: z.string(),
  charteredPersonAddress: z.string(),
  brandName: z.string(),
  model: z.string(),
  dimensions: z.string(),
  manufacturingYear: z.string(),
});

export const productUpdateZodSchema = z.object({
  registrationNumber: z.string().optional(),
  equipmentName: z.string().optional(),
  category: ProductCategory.optional(),
  status: EquipmentStatus.optional(),
  ownerName: z.string().optional(),
  ownerAddress: z.string().optional(),
  ownerNumber: z.string().optional(),
  charteredBy: z.string().optional(),
  charteredPersonPhone: z.string().optional(),
  charteredPersonAddress: z.string().optional(),
  brandName: z.string().optional(),
  model: z.string().optional(),
  dimensions: z.string().optional(),
  manufacturingYear: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productZodSchema>;
export type ProductUpdateFormValues = z.infer<typeof productUpdateZodSchema>;
