interface TransactionStatus {
  status: number;
  transactionId: number;
  adminStatus: number;
  createdAt: string;
  updatedAt: string;
}

interface TransactionPaymentReceipt {
  id: number;
  filePath: string;
}

interface TransactionByUser {
  id: number;
  name: string;
}

export interface TransactionDetails {
  id: number;
  userId: number;
  paymentType: number;
  beneficiaryName: string;
  beneficiaryRelationship: string;
  beneficiaryMobileCountryCode: string;
  beneficiaryMobileNumber: string;
  beneficiaryAddress: string;
  receiverTransferType: number;
  receiverTransferTypeTitle: string;
  bankName: string;
  bankAccountNumber: string;
  bankCode: string;
  bankAccountType: number;
  accountTypeName: string;
  countryId: number;
  countryName: string;
  countryCode: string;
  latitude: string;
  longitude: string;
  purpose: string;
  transactionUniqueId: string;
  paymentReceiptId: number;
  chipperCash: any; // null value, could be any or specific type if known
  mobileMoneyMobileNo: any; // null value, could be any or specific type if known
  mobileMoneyCharge: any; // null value, could be any or specific type if known
  walletAmount: any; // null value, could be any or specific type if known
  commission: string;
  senderAmount: string;
  senderCurrencyCode: string;
  totalPayment: string;
  receiverCurrencyCode: string;
  receiverAmount: string;
  currencyRate: any; // null value, could be any or specific type if known
  createdAt: string;
  updatedAt: string;
  deletedAt: any; // null value, could be any or specific type if known
  transactionStatus: TransactionStatus;
  transactionPaymentReceipt: TransactionPaymentReceipt;
  adminTransactionReceipt: any; // null value, could be any or specific type if known
  transactionFeedback: any; // null value, could be any or specific type if known
  transactionByUser: TransactionByUser;
}
