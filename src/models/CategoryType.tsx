// interface User {
//   id: number;
//   name: string;
//   profileImage: string | null;
// }

// export interface CategoryListing {
//   id: number;
//   code: string;
//   status: number;
//   userId: number;
//   isRevision: boolean;
//   revisionId: number | null;
//   createdAt: string;
//   updatedAt: string;
//   name: string;
//   description: string;
//   updatedBy: User | null;
//   author: User;
// }

interface CategoryType {
  id: number;
  code: string;
  name: string;
}

interface Author {
  id: number;
  name: string;
  profileImage: string | null;
}
export interface CategoryListing {
  id: number;
  code: string;
  status: number;
  isRevision: boolean;
  revisionId: number | null;
  createdAt: string;
  updatedAt: string;
  level: number;
  name: string;
  categoryImage: string | null;
  parent: null;
  categorytype: CategoryType;
  updatedBy: string | null;
  author: Author;
}

export interface CategoryDetailsResponse {
  data: CategoryListing[];
  page: number;
  perPage: number;
  parentHirarchy: any;
  totalPages: number;
  totalRecords: number;
}
