export const ApiMethodType = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
  update: "UPDATE",
};

export const Apis = {
  login: "user/login",

  getTransactionListing: "/admin/transactionsListing",

  createNewCategory: "/category",
  updatePostCategory: (id: string) => `/category/${id}`,
  getPostCategoryById: (id: number) => `/category/${id}`,
  getAllPostCategory: "/category/list",
  deletePostCategoryById: (id: number) => `/category/${id}`,


  uploadFile: "/attachment/upload",

  createNewPost: "/post",
  getAllPostList: "/post/list",
  changePostStatus: (id: number) => `/post/${id}/status`,
  getPostById: (id: number) => `/post/${id}`,
  updatePostById: (id: string) => `/post/${id}`,
  deletePostById: (id: number) => `/post/${id}`,

  addCategory: "/category-type",
  updateCategory: (id: string) => `/category-type/${id}`,
  getAllCategory: "/category-types",
  getCategoryById: (id: number) => `/category-type/${id}`,
  deleteCategoryById: (id: number) => `/category-type/${id}`,

  sendEmail: "/email/send",
  setEmailTemplate: "/email/template",
  getEmailTemplateList: "/email/template/list",
  getEmailTemplateById: (id: number) => `/email/template/${id}`,
  updateEmailTemplate: (id: string) => `/email/template/${id}`,
  deleteEmailTemplateById: (id: number) => `/email/template/${id}`,

  addFaq: "/faq",
  getFaqList: "/faq/list",
  changeFaqStatus: (id: number) => `/faq/${id}`,
  getFaqById: (id: number) => `/faq/${id}`,
  deleteFaqById: (id?: number) => `/faq/${id}`,
  updateFaqById: (id: string) => `/faq/${id}`,

  getAllConstants: `/user/getConstants?type=10`,
  getAllUser: "/admin/getUsers",
  getUserById: (id: number) => `/admin/getUserById/${id}`,

  getSettings: "/admin/getSettings",
  addSettings: "/admin/addSettings",
  updateSettings: "/admin/updateSettings",
  getKycDetails: "/admin/getKycRequest",
  // getKycById: (id: number) => `admin/getKycRequestById/${id}`,
  getKycByUserId: (id: number) => `/admin/getKycRequestByUserId/${id}`,
  resetUserKyc: "/admin/resetUserKycVerification",
  changeUserStatus: "admin/activateDeactivateUser",

  updateKycStatus: "/admin/updateKycStatus",
  updateCurrencyConversion: "/admin/updateCountryCurrencyConversionRate",
  updateUserEmailMobile: "/admin/adminUpdateEmailOrPhone",
  addCountryCurrency: "/admin/addCountryCurrencyCharges",
  updateCountryCurrency: "/admin/updateCountryCurrencyCharges",
  deleteCountryCurrency: (id?: number) => `/admin/deleteCountryCurrencyCharges/${id}`,
  getCountryCurrencyList: "/admin/getCountryCurrencyCharges",
  getCountryList: "/admin/getCountries",
  getCountryCurrencyById: (id?: number) => `/admin/getCountryCurrencyChargesByCountryId${id ? `?countryId=${id}` : ''}`,
  getCurrencyConversion: (id?: number) => `/admin/getCountryCurrencyConversions${id ? `?id=${id}` : ''}`,
  getMethod(api: string) {
    switch (api) {
      case Apis.login:
      case Apis.addCountryCurrency:
      case Apis.addSettings:
      case Apis.addFaq:
      case Apis.addCategory:
      case Apis.createNewPost:
      case Apis.sendEmail:
      case Apis.uploadFile:
      case Apis.createNewCategory:
      case Apis.setEmailTemplate:
        return "POST";
      case Apis.updateKycStatus:
      case Apis.updateCurrencyConversion:
      case Apis.changeUserStatus:
      case Apis.updateUserEmailMobile:
      case Apis.updateCountryCurrency:
      case Apis.updateSettings:
      case Apis.resetUserKyc:
        return "PATCH";

      default:
        return "GET";
    }
  },
};
