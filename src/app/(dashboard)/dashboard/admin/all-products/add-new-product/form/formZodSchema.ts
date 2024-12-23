import { z } from "zod";

const ProductCategory = z.enum(['CIVIL', 'MARIN', 'ENGINEERING']);
const EquipmentStatus = z.enum([
  'WORKING',
  'STAND_BY',
  'BREAK_DOWN',
  'UNDER_MAINTENANCE',
  'OUT_OF_SERVICE',
  'IN_REPAIR',
  'DECOMMISSIONED',
  'PENDING_INSPECTION',
  'AVAILABLE',
  'RESERVED',
  'LOST',
  'DAMAGED'
]);

export const productZodSchema = z.object({
  equipmentImage: z.array(z.object({})).optional(),
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
  manufacturingYear: z.string()
});

export type ProductFormValues = z.infer<typeof productZodSchema>;
