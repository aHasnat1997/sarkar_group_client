// User type
type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
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

// Product type
export type TProduct = {
  id: string;
  equipmentId: string;
  equipmentName: string;
  equipmentImage: string[];
  registrationNumber: string;
  category: string;
  status: string;
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
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};

// ProjectGalleryComment type
export type TProjectGalleryComment = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
  role: string;
  comment: string;
};

// ProjectGallery type
export type TProjectGallery = {
  id: string;
  projectId: string;
  title: string;
  image: string;
  uploaderId: string;
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
  status: string;
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
