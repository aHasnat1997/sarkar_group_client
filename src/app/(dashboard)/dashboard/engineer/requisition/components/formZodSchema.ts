import { z } from "zod";

export const requisitionSchema = z.object({
  title: z.string(),
  projectId: z.string(),
  description: z.string(),
  amount: z.number()
});

export type RequisitionFormValues = z.infer<typeof requisitionSchema>;
