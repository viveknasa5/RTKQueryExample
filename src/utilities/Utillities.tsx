import moment from "moment";

export const timeFormat = (date: string) => {
  return moment(date).format("Do MMM YYYY | h:mm A");
};

export const dateFormate = (date: string) => {
  if (date) {
    return moment(date).format("ll");
  } else {
    return "-";
  }
};
export const formatePhoneNumber = (e: string, digits: number) => {
  let phoneNumber = e.replace(/\D/g, "");
  if (phoneNumber.length > digits) {
    phoneNumber = phoneNumber.slice(0, digits);
  }
  return phoneNumber;
};

export const formateForCurrency = (e: any, digits: number) => {
  let currency = e.replace(/[^\d.]/g, "");
  const dotCount = (currency.match(/\./g) || []).length;
  if (dotCount > 1) {
    const firstDotIndex = currency.indexOf(".");
    currency =
      currency.slice(0, firstDotIndex + 1) +
      currency.slice(firstDotIndex + 1).replace(/\./g, "");
  }

  // Limit the length to the specified number of digits
  if (currency.replace(/\./g, "").length > digits) {
    currency = currency.slice(0, currency + (dotCount > 0 ? 1 : 0));
  }
  return currency;
};

export const kycStatus = (data: number) => {
  switch (data) {
    case 0:
      return "Pending";
    case 1:
      return "Complete";
    case 2:
      return "In-Progress";
    case 3:
      return "Manually Apply";
    case 4:
      return "Rejected";
    case 5:
      return "Re-Verification";
    default:
      break;
  }
};

export const handleFileDownload = (filePath?: string) => {
  if (!filePath) return;
  const extension = filePath.split(".").pop();
  const url = filePath; // Replace with your file URL
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `file.${extension}`); // or any other filename and extension
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const numberFormatter = (value: string) => {
  return value ? parseFloat(value!).toFixed(2) : "-";
};

export enum PaymentType {
  none = 0,
  poli = 1,
  direct = 2,
  cardPay = 3,
  googlPay = 4,
  applePay = 5,
  zaiPay = 6,
  novattiPay = 7,
}

export const PaymentTypeData = {
  getTitle(sttaus?: PaymentType) {
    if (!sttaus) {
      return "";
    }
    switch (sttaus) {
      case PaymentType.poli:
        return "Poli transfer";
      case PaymentType.direct:
        return "Direct transfer";
      case PaymentType.cardPay:
        return "Card Payment";
      case PaymentType.applePay:
        return "Apple Pay";
      case PaymentType.googlPay:
        return "Google Pay";
      case PaymentType.zaiPay:
        return "KKBits NPP Instant Payment";
      case PaymentType.novattiPay:
        return "Instant Pay Id";
      // case PaymentType.none:
      //   return 'None';
    }
  },
};

export const documentOptions = [
  { value: 1, label: "International Passport" },
  { value: 2, label: "Driving License" },
  { value: 3, label: "Medicare Card" },
];
// const KYC_VERIFICATION_STEP = {
//   SIGNUP: 0,
//   ADDRESS: 1,
//   BIOMETRIC: 2,
//   ADMIN_ACCEPTED: 3,
//   ADMIN_REJECTED: 4,
//   ADMIN_REVERIFY_REQUEST: 5,
// };
