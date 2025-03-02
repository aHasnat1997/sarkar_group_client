import { z } from "zod";

export const paymentSchema = z.object({
  title: z.string(),
  projectId: z.string(),
  description: z.string(),
  amount: z.number()
});

export type PaymentFormValues = z.infer<typeof paymentSchema>;
