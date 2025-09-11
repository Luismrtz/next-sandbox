export type Author = {
  _id: number | string;
  name: string;
};

export type StartupTypeCard = {
  _id: number | string;
  _createdAt: Date | string;
  views: number;
  author: Author;
  description: string;
  imageSmall: string;
  imageMedium: string;
  category: string;
  title: string;
};
