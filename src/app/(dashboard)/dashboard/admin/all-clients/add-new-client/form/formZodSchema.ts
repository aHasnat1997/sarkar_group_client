import { z } from "zod";

export const clientZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  profileImage: z.object({}).optional(),
  mobile: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.number(),
  documents: z.array(z.object({})).optional()
});

export type ClientFormValues = z.infer<typeof clientZodSchema>;
