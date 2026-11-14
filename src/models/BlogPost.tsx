interface Category {
  id: number;
  code: string;
  name: string;
}

interface Author {
  id: number;
  name: string;
  profileImage: string | null;
}

export interface PostDetails {
  id: number;
  slug: string;
  status: number;
  isRevision: boolean;
  revisionId: number | null;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  excerpt: string;
  category: Category;
  postImage: string | null;
  postVideo: string | null;
  updatedBy: Author | null;
  author: Author;
}

export interface BlogPostArgs {
  message: string;
  responseData: PostDetails;
}
