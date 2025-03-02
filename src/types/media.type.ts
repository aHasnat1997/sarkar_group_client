import { TUploadedFile } from "./uploadedFile.type";

type TCommenter = {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: TUploadedFile | null;
};

export type TMediaComment = {
  id: string;
  mediaId: string;
  commenterId: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  commenter: TCommenter;
};

type Uploader = {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: TUploadedFile | null;
};

export type TMedia = {
  id: string;
  uploaderId: string;
  title: string;
  description: string;
  image: TUploadedFile | null;
  keyword: string;
  createdAt: string;
  updatedAt: string;
  comments: TMediaComment[];
  uploader: Uploader;
};
