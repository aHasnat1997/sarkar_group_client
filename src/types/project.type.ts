import { TProduct } from "./product.type";
import { TUploadedFile } from "./uploadedFile.type";

// User type
type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: TUploadedFile | null;
  role: string
};

// Employee type
type TEmployee = {
  id: string;
  mobile: string;
  employeeType: string;
  department: string;
  designation: string;
  officeLocation: string;
  user: TUser;
};

// Client type
type TClient = {
  id: string;
  mobile: string;
  user: TUser;
};

// ProjectGalleryComment type
export type TProjectGalleryComment = {
  id: string;
  comment: string;
  commenter: TUser
};

// ProjectGallery type
export type TProjectGallery = {
  id: string;
  projectId: string;
  title: string;
  images: TUploadedFile[];
  uploaderId: string;
  uploader: TUser;
  comments: TProjectGalleryComment[];
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};

// Main Project type
export type TProject = {
  id: string;
  projectName: string;
  department: string;
  clientId: string;
  createdBy: string;
  projectManagerId: string;
  startDate: string; // ISO Date string
  estimatedEndDate: string; // ISO Date string
  projectType: string;
  productType: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED' | 'DELAYED' | 'UNDER_REVIEW' | 'APPROVED' | 'ARCHIVED';
  street: string;
  city: string;
  state: string;
  zip: number;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  projectManager: TEmployee;
  client: TClient;
  engineers: TEmployee[];
  products: TProduct[];
  projectGallery: TProjectGallery[];
};
