import { TProduct } from "./product.type";
import { TProject } from "./project.type";
import { TUploadedFile } from "./uploadedFile.type";

type EmployeeDetails = {
  id: string;
  employeeId: string;
  userId: string;
  mobile: string;
  userName: string;
  dob: string;
  maritalStatus: string;
  gender: string;
  employeeType: string;
  department: string;
  designation: string;
  joiningDate: string;
  officeLocation: string;
  nationality: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  documents: TUploadedFile[];
  createdAt: string;
  updatedAt: string;
};
type TAdminInfo = {
  id: string;
  employeeId: string;
  userId: string;
  mobile: string;
  userName: string;
  dob: string;
  maritalStatus: string;
  gender: string;
  employeeType: string;
  department: string;
  designation: string;
  joiningDate: string;
  officeLocation: string;
  nationality: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  documents: TUploadedFile[];
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }
};

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: Partial<TUploadedFile> | null;
  role: string;
  projectManagers: EmployeeDetails | null;
  admin: EmployeeDetails | null
};

export type TRequestProducts = {
  id: string;
  productId: string;
  projectId: string;
  requestEmployeeId: string;
  description: string;
  startDate: string;
  endDate: string;
  actionByAdminId: string | null;
  declineReason: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  admin: TAdminInfo | null;
  employee: Employee;
  product: TProduct;
  project: TProject;
};
