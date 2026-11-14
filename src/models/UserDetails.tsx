export interface UserDetail {
  id: number;
  email: string;
  countryCode: string;
  mobile: string;
  password: string;
  status: number;
  kycStatus: number;
  verificationStep: number;
  userProfile: UserProfile;
  Kyc: Kyc[];
  Roles: Role[];
  createdAt: string;
  updatedAt: string;
}
export interface UserDetailResponse {
  data: UserDetail[];
  perPage: number;
  totalPages: number;
  totalRecords: number;
}
// interface DataModal {
//   data: UserDetail[];
//   perPage: number;
//   totalPages: number;
//   totalRecords: number;
// }

export interface UserDetailsSuccessResponse {
  success: boolean;
  message: string;
  responseData: Record<string, unknown>;
}

interface Address {
  state: string;
  country: string;
  postalCode: string;
  streetName: string;
  streetType: string;
  unitNumber: string;
  fullAddress: string;
  streetNumber: string;
  streetAddress: string;
}

interface Kyc {
  // givenName: string;
  // middleName: string;
  // firstName: string;
  // familyName: string;
  // dob: string;
  // address: Address;
  // status: number;
  // isManual: number;
  // docType: number;
  // docNumber: string;
  // lastName: string;
  // Roles: roles[];
  // frontAttachmentId: Attachment;
  // backAttachmentId: Attachment | null;
  // userAttachmentId: UserAttachment;
  // cameraAttachmentId: CameraAttachment | null;

  firstName: string;
  middleName?: string | null;
  lastName: string;
  dob: string;
  address: Address;
  status: number;
  isManual: number;
  docType: number;
  docNumber: string;
  docExpiry: string;
  rejectReason: string;
  reverificationReason?: string | null;
  createdAt: string;
  updatedAt: string;
  frontAttachment: Attachment;
  backAttachment?: Attachment | null;
  userAttachment: UserAttachment;
  cameraAttachment: CameraAttachment;
}
interface Attachment {
  fileName: string;
  userId: number;
  attachmentType: number;
  uniqueName: string;
  filePath: string;
}
interface UserAttachment extends Attachment {
  id: number;
}

interface CameraAttachment extends Attachment {
  id: number;
}

interface roles {
  id: number;
  code: string;
  userId: number | null;
  lastUpdatedBy: number | null;
  accountId: number | null;
  isRevision: boolean;
  revisionId: number | null;
  isDefault: boolean;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface UserProfile {
  name: string;
  referralCode: string;
  attachmentId: number | null;
  imageId: number | null;
  occupationId: number;
  occupationName: string;
}

interface Role {
  id: number;
  code: string;
  userId: number | null;
  lastUpdatedBy: number | null;
  accountId: number | null;
  isRevision: boolean;
  revisionId: number | null;
  isDefault: boolean;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
