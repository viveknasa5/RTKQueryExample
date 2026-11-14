import * as Yup from "yup";
// import { object, string, ref } from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .required("Please enter your email address.")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Please enter your password.")
    .trim()
    .min(8, "Password should contain at least 8 characters."),
});

export const CurrencyConversionSchema = Yup.object({
  rate: Yup.string().required("Please enter the value."),
});

export const CountryCurrencySchema = Yup.object({
  countryId: Yup.string().required("Please enter the value."),
  currencyAddonSettings: Yup.array()
    .of(
      Yup.object().shape({
        currency: Yup.string().required("Please select currency."),
        currencyAddon: Yup.string().required("Please enter currency value."),
        actionType: Yup.number().required("Please select action."),
      })
    )
    .required(),
});

export const KycStatusRejectSchema = Yup.object({
  rejectReason: Yup.string().required("Please enter reason."),
});

export const CategorySchema = Yup.object({
  name: Yup.string().required("Please enter category name."),
  categoryTypeCode: Yup.string().required("Please select category code."),
});

export const AddBlogSchema = Yup.object({
  title: Yup.string().required("Please enter category title."),
  categoryId: Yup.string().required("Please select category code."),
  excerpt: Yup.string().required("Please enter short description."),
  // imageId: Yup.string().required("Please insert document image."),
  description: Yup.string().required("Please enter description ."),
});

export const FaqSchema = Yup.object({
  question: Yup.string().required("Please enter question."),
  answer: Yup.string().required("Please write your answer."),
});

export const EmailTemplateSchema = Yup.object({
  title: Yup.string().required("Please enter title."),
  subject: Yup.string().required("Please enter subject."),
  message: Yup.string().required("Please enter message."),
});

export const SettingsValidationSchema = Yup.object({
  charges: Yup.string().required("Please enter currency rate."),
  adminEmail: Yup.string().required("Please enter admin email."),
  adminContactNumber: Yup.string().required("Please enter admin contact."),
  adminAddress: Yup.string().required("Please enter admin address."),
  poliPaymentLimit: Yup.string().required("Please enter poli payment limit."),
  requestRadius: Yup.string().required("Please enter radius."),
  requestTime: Yup.string().required("Please enter request time."),
  requestLimit: Yup.string().required("Please enter request limit."),
  mobileMoneyCharge: Yup.string().required("Please enteradmin contact."),
  zaiPayId: Yup.string().required("Please enter admin contact."),
  novattiPayId: Yup.string().required("Please enter novatti pay id."),

  bankName: Yup.string().required("Please enter bank name."),
  accountHolderName: Yup.string().required("Please enter account holder name"),
  accountNo: Yup.string().required("Please enter account no."),
  uniqueCode: Yup.string().required("Please enter unique code."),

  cardCharges: Yup.string().required("Please enter card charges."),
  googleCharges: Yup.string().required("Please enter google charges."),
  appleCharges: Yup.string().required("Please enter apple charges."),
  zaiCharges: Yup.string().required("Please enter zai charges."),
  directCharges: Yup.string().required(
    "Please enter direact transfer charges."
  ),
  poliCharges: Yup.string().required("Please enter poli charges."),
  novattiCharges: Yup.string().required("Please enter novatti charges."),

  referringUser: Yup.string().required("Please enter refering amount."),
  referredUser: Yup.string().required("Please enter refering amount."),
  minimumAmountReferredBonus: Yup.string().required(
    "Please enter refering amount."
  ),

  palmpayPayoutMinLimit: Yup.string().required(
    "Please enter Palm pay min limit."
  ),
  palmpayPayoutMaxLimit: Yup.string().required(
    "Please enter Palm pay max limit."
  ),
});

export const TestimonialSchema = Yup.object({
  name: Yup.string().required("Please enter question."),
  feedback: Yup.string().required("Please write your answer."),
});

export const PromotionSchema = Yup.object({
  title: Yup.string().required("Please enter title."),
  type: Yup.string().required("Please select type."),
});

export const StaffRoleSchema = Yup.object({
  name: Yup.string().required("Please enter name."),
  email: Yup.string().required("Please enter email."),
  phone: Yup.string().required("Please enter phone number."),
  password: Yup.string().required("Please enter password."),
  role: Yup.string().required("Please select role."),
});
