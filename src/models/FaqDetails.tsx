interface User {
  id: number;
  name: string;
  profileImage: string | null;
}

export interface FAQItem {
  id: number;
  status: number;
  isRevision: boolean;
  revisionId: number | null;
  createdAt: string;
  updatedAt: string;
  question: string;
  answer: string;
  updatedBy: User | null;
  author: User;
}
