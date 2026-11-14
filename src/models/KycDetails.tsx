interface Address {
  state: string;
  country: string;
  postal_code: string;
  full_address: string;
  street_address: string;
}

// export interface kyc {
//   id: number;
//   userId: number;
//   givenName: string;
//   middleName: string;
//   familyName: string;
//   dob: string;
//   address: Address;
//   status: number;
//   isManual: number;
//   docType: number;
//   docNumber: string;
//   frontAttachmentId: number;
//   backAttachmentId: number | null;
//   userAttachmentId: number;
//   cameraAttachmentId: number;
//   createdAt: string;
//   updatedAt: string;
//   deletedAt: string | null;
// }

interface Attachment {
  fileName: string;
  userId: number;
  attachmentType: number;
  uniqueName: string;
  filePath: string;
}

export interface kyc {
  id: number;
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

export interface KycUsers {
  id: number;
  email: string;
  countryCode: string;
  mobile: string;
  password: string;
  status: number;
  kycStatus: number;
  verificationStep: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: number;
  Kyc: kyc[];
  Roles: roles[];
  Attachments: Attachment[];
  userProfile: UserProfile;
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
export interface KycUserResponse {
  message: string;
  responseData: KycUsers;
  success: boolean;
}

interface UserProfile {
  name: string;
  referralCode: string;
  attachmentId: number | null;
  imageId: number | null;
  occupationId: number;
  occupationName: string;
}

export interface KycResponseData {
  data: KycUsers[];
  perPage: number;
  totalPages: number;
  totalRecords: number;
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

interface Attachment {
  filePath: string;
}

interface UserAttachment extends Attachment {
  id: number;
}

interface CameraAttachment extends Attachment {
  id: number;
}
