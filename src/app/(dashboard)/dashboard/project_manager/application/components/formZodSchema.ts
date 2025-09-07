import { z } from "zod";

const ApplicationType = z.enum([
  "LEAVE_APPLICATION",
  "RESIGNATION_APPLICATION",
  "TRANSFER_APPLICATION",
  "SALARY_ADVANCE",
  "LOAN_APPLICATION",
  "COMPLAINT_APPLICATION",
  "GRIEVANCE_APPLICATION",
  "EXPENSE_REIMBURSEMENT_APPLICATION",
]);

export const applicationSchema = z.object({
  subject: z.string(),
  description: z.string(),
  applicationType: ApplicationType,
  documents: z.array(z.object({})).optional(),
  startDate: z.any(),
  endDate: z.any(),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
