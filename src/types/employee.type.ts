/* eslint-disable @typescript-eslint/no-explicit-any */

import { TUploadedFile } from "./uploadedFile.type";

type TProject = {
  id: string;
  projectName: string;
  startDate: string;
  estimatedEndDate: string;
  status: string;
}

type TEmployeeInfo = {
  id: string;
  employeeId: string;
  userId: string;
  mobile: string;
  userName: string;
  dob: string; // ISO date format (you can use Date if needed)
  maritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED"; // Example enum
  gender: "MALE" | "FEMALE" | "OTHER"; // Example enum
  employeeType: "APPRENTICE" | "FULL_TIME" | "PART_TIME" | "CONTRACT"; // Example enum
  department: "CIVIL" | "MARINE" | "ENGINEERING" | "IT" | "HR"; // Example enum
  designation: string; // You can further type this with specific designations if needed
  joiningDate: string; // ISO date format (you can use Date if needed)
  officeLocation: string;
  nationality: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  documents: Partial<TUploadedFile>[] | [];
  createProjects?: TProject[] | [];
  assignProjects?: TProject[] | [];
  createdAt: string;
  updatedAt: string;
};

export type TEmployeeData = {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: Partial<TUploadedFile> | null;
  email: string;
  isActive: boolean;
  isDeleted: boolean;
  role: "ENGINEER" | "ADMIN" | "PROJECT_MANAGER" | "CLIENT" | "SUPER_ADMIN"; // Example enum for roles
  createdAt: string; // ISO date format (you can use Date if needed)
  updatedAt: string; // ISO date format (you can use Date if needed)
  clients: any; // Define the type for clients if needed
  projectGallery: any[]; // Define the type of project gallery if needed
  employeeInfo: TEmployeeInfo;
};
