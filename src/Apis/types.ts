// COMMON API RESPONSE
export interface IAPISuccesResponse<T> {
  message?: string;
  responseData: T;
  data?: T;
  status?: number;
  // pagination?:IAPIPaginationResponse
}

export interface IAPIErrorResponse {
  data: {
    error: string;
    errors: Record<string, unknown>;
    message: string | undefined;
    statusCode: number | string;
  };
  status: number;
}

export interface IAPICommonError {
  message: string | undefined;
  statusCode: number | string;
}

export interface IAPIPaginationResponse {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number
}


export interface IAPICommonErrorResponse {
  message: string | undefined;
  statusCode: number | undefined;
}

// USERS
export interface IUserLoginArgs {
  email?: string;
  mobile?: string;
  password: string;
  countryCode?: string;
  token?: string
}


export interface FaqArgs {
  question: string,
  answer: string,
}
export interface GeneralSettingsArgs {

  basicSetting: {
    charges: string;
    adminEmail: string;
    adminContactNumber: string;
    poliPaymentLimit: string;
    requestRadius: string;
    requestTime: string;
    requestLimit: string;
    mobileMoneyCharge: string;
    zaiPayId: string;
    novattiPayId: string;
  };
  bankAccountSetting: {
    bankName: string;
    accountHolderName: string;
    accountNo: string;
    uniqueCode: string;
  };
  paymentSetting: {
    cardCharges: string;
    googleCharges: string;
    appleCharges: string;
    zaiCharges: string;
    directCharges: string;
    poliCharges: string;
    novattiCharges: string;
    poliPay: boolean;
    zaiPay: boolean;
    directPay: boolean;
    novattiPay: boolean;
  };
  referralSetting: {
    referringUser: string;
    referredUser: string;
    minimumAmountReferredBonus: string;
  };
  palmPaySetting: {
    palmpayPayoutMinLimit: string;
    palmpayPayoutMaxLimit: string;
  };
}

export interface IUserLogoutArgs {
  fcmToken?: string;
}
export interface IUserKycStatusArgs {
  id?: number;
  userId?: number;
  status?: number;
  rejectReason?: string;
}

export interface ChangeBlogPostStatusBody {
  status: boolean; // or whatever type `status` should be
  id: number; // assuming `id` is a number
}

