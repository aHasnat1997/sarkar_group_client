type TCommenter = {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: string | null;
};

type TMediaComment = {
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
  profileImage: string | null;
};

export type TMedia = {
  id: string;
  uploaderId: string;
  title: string;
  description: string;
  image: string;
  keyword: string;
  createdAt: string;
  updatedAt: string;
  mediaComments: TMediaComment[];
  uploader: Uploader;
};
