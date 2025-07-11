import { TUploadedFile } from "./uploadedFile.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: TUploadedFile | null;
  role: string;
  isActive: boolean;
  isDeleted: boolean;
};

type TProject = {
  id: string;
  projectName: string;
  department: string;
  clientId: string;
  createdBy: string;
  projectManagerId: string;
  startDate: string;
  estimatedEndDate: string;
  projectType: string;
  productType: string;
  status: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  createdAt: string;
  updatedAt: string;
};

export type TClient = {
  id: string;
  userId: string;
  mobile: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  documents: TUploadedFile[];
  createdAt: string;
  updatedAt: string;
  user: TUser;
  projects: TProject[];
  product: any[];
};
