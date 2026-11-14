export interface User {
  email: string;
  token?: string;
}

export interface UserProps {
  id: number;
  accountId: number | null;
  email: string;
  countryCode: string;
  mobile: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  kycStatus: number;
  verificationStep: number;
  token: string;
  refreshToken: string;
  userProfile: UserProfile;
  roles: Role[];
  permissions: string[];
}
interface UserProfile {
  name: string;
  profileImage: string | null;
}

interface Role {
  code: string;
  status: number;
  name: string;
  Permissions: any[]; // You can define the type for Permissions if you have more information about it
}
