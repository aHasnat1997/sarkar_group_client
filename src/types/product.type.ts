import { TCrew } from "./crew.type";
import { TUploadedFile } from "./uploadedFile.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProduct = {
  id: string;
  equipmentId: string;
  equipmentName: string;
  equipmentImage: TUploadedFile[];
  registrationNumber: string;
  category: "CIVIL" | "MARIN" | "ENGINEERING"; // Assuming category is an enum
  status: "WORKING" | "RUNNING" | "STAND_BY" | "BREAK_DOWN"; // Assuming status is an enum
  createdAdminId: string;
  ownerName: string;
  ownerAddress: string;
  ownerNumber: string;
  charteredBy: string;
  charteredPersonPhone: string;
  charteredPersonAddress: string;
  brandName: string;
  model: string;
  dimensions: string;
  manufacturingYear: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  createdAdminInfo: {
    id: string;
    mobile: string;
    employeeType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR"; // Assuming employeeType is an enum
    department: "ENGINEERING" | "SALES" | "HR" | "MARKETING"; // Assuming department is an enum
    designation: string; // Assuming this is a freeform string or an enum like "UX_UI_DESIGN_LEAD"
    officeLocation: string;
    user: {
      firstName: string;
      lastName: string;
      email: string;
      role: "ADMIN" | "SUPER_ADMIN" | "USER"; // Assuming role is an enum
    };
  };
  projects: Record<string, unknown>[]; // Adjust this to the specific structure of projects if known
  crews: TCrew[]; // Adjust this to the specific structure of crews if known
};
