interface Author {
  id: number;
  name: string;
  profileImage: string | null;
}

export interface EmailTemplateProps {
  id: number;
  code: string;
  status: number;
  userId: number;
  isRevision: boolean;
  revisionId: number | null;
  createdAt: string;
  updatedAt: string;
  replacements: string;
  title: string;
  subject: string;
  message: string;
  updatedBy: Author | null;
  author: Author;
}
