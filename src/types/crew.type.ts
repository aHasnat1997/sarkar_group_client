import { TProduct } from "./product.type";
import { TUploadedFile } from "./uploadedFile.type";

export type TCrew = {
  id: string,
  fullName: string,
  phone: string,
  nid: string,
  productId?: string,
  profileImage?: TUploadedFile,
  isActive: boolean,
  createdAt: string,
  updatedAt: string,
  product: TProduct,
};
