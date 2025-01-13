import { z } from "zod";

const ApplicationType = z.enum([
  'LEAVE',
  'EMERGENCY_MONEY',
  'EQUIPMENT_PROBLEM',
  'JOB_APPLICATION',
  'INTERNSHIP_APPLICATION',
  'VOLUNTEER_APPLICATION',
  'SCHOLARSHIP_APPLICATION',
  'GRANT_APPLICATION',
  'MEMBERSHIP_APPLICATION',
  'LOAN_APPLICATION',
  'PARTNERSHIP_APPLICATION',
  'CUSTOMER_FEEDBACK',
  'SERVICE_REQUEST'
])

export const applicationSchema = z.object({
  subject: z.string(),
  description: z.string(),
  applicationType: ApplicationType,
  documents: z.array(z.object({})).optional(),
  startDate: z.any(),
  endDate: z.any()
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
