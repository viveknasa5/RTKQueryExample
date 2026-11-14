import Controller from "../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React from "react";
import FilterSubmitButton from "../../../components/CommonComponents/Button/FilterSubmitButton";
import {
  useGetGeneralSettingsQuery,
  useUpdateGeneralSettingsMutation,
} from "../../../Apis/setting.Api";
import toast from "react-hot-toast";
import { SettingsValidationSchema } from "../../../utilities/Schema";

const SettingMainPage = () => {
  const [updateGeneralSettingsMutation, { isLoading: updateApiResponse }] =
    useUpdateGeneralSettingsMutation();
  const { data } = useGetGeneralSettingsQuery({});

  console.log(data, "datadata");
  const initialValues = {
    charges: data?.Basic_Settings?.charges ?? "",
    adminEmail: data?.Basic_Settings?.adminEmail ?? "",
    adminContactNumber: data?.Basic_Settings?.adminContactNumber ?? "",
    adminAddress: data?.Basic_Settings?.adminAddress,
    poliPaymentLimit: data?.Basic_Settings?.poliPaymentLimit ?? "",
    requestRadius: data?.Basic_Settings?.requestRadius ?? "",
    requestTime: data?.Basic_Settings?.requestTime ?? "",
    requestLimit: data?.Basic_Settings?.requestLimit ?? "",
    mobileMoneyCharge: data?.Basic_Settings?.mobileMoneyCharge ?? "",
    zaiPayId: data?.Basic_Settings?.zaiPayId ?? "",
    novattiPayId: data?.Basic_Settings?.novattiPayId ?? "",

    bankName: data?.Bank_Account_Information?.bankName ?? "",
    accountHolderName: data?.Bank_Account_Information?.accountHolderName ?? "",
    accountNo: data?.Bank_Account_Information?.accountNo ?? "",
    uniqueCode: data?.Bank_Account_Information?.uniqueCode ?? "",

    cardCharges: data?.Payment_Option_And_Charges?.cardCharges ?? "",
    googleCharges: data?.Payment_Option_And_Charges?.googleCharges ?? "",
    appleCharges: data?.Payment_Option_And_Charges?.appleCharges ?? "",
    zaiCharges: data?.Payment_Option_And_Charges?.zaiCharges ?? "",
    directCharges: data?.Payment_Option_And_Charges?.directCharges ?? "",
    poliCharges: data?.Payment_Option_And_Charges?.poliCharges ?? "",
    novattiCharges: data?.Payment_Option_And_Charges?.novattiCharges ?? "",
    poliPay: data?.Payment_Option_And_Charges?.poliPay ?? false,
    zaiPay: data?.Payment_Option_And_Charges?.zaiPay ?? false,
    directPay: data?.Payment_Option_And_Charges?.directPay ?? false,
    novattiPay: data?.Payment_Option_And_Charges?.novattiPay ?? false,

    referringUser: data?.Referral_Settings?.referringUser ?? "",
    referredUser: data?.Referral_Settings?.referredUser ?? "",
    minimumAmountReferredBonus:
      data?.Referral_Settings?.minimumAmountReferredBonus ?? "",

    palmpayPayoutMinLimit: data?.Palm_Pay_Settings?.palmpayPayoutMinLimit ?? "",
    palmpayPayoutMaxLimit: data?.Palm_Pay_Settings?.palmpayPayoutMaxLimit ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      basicSetting: {
        id: "1",
        type: 1,
        title: "Basic Settings",
        charges: values?.charges,
        adminAddress: values?.adminAddress,
        adminEmail: values?.adminEmail,
        adminContactNumber: values?.adminContactNumber,
        poliPaymentLimit: values?.poliPaymentLimit,
        requestRadius: values?.requestRadius,
        requestTime: values?.requestTime,
        requestLimit: values?.requestLimit,
        mobileMoneyCharge: values?.mobileMoneyCharge,
        zaiPayId: values?.zaiPayId,
        novattiPayId: values?.novattiPayId,
      },
      bankAccountSetting: {
        id: "2",
        type: 2,
        title: "Bank Account Information",
        bankName: values?.bankName,
        accountHolderName: values?.accountHolderName,
        accountNo: values?.accountNo,
        uniqueCode: values?.uniqueCode,
      },
      paymentSetting: {
        id: "3",
        type: 3,
        title: "Payment Option And Charges",
        cardCharges: values?.cardCharges,
        googleCharges: values?.googleCharges,
        appleCharges: values?.appleCharges,
        zaiCharges: values?.zaiCharges,
        directCharges: values?.directCharges,
        poliCharges: values?.poliCharges,
        novattiCharges: values?.novattiCharges,
        poliPay: values?.poliPay,
        zaiPay: values?.zaiPay,
        directPay: values?.directPay,
        novattiPay: values?.novattiPay,
      },
      referralSetting: {
        id: "4",
        type: 4,
        title: "Referral Settings",
        referringUser: values?.referringUser,
        referredUser: values?.referredUser,
        minimumAmountReferredBonus: values?.minimumAmountReferredBonus,
      },
      palmPaySetting: {
        id: "5",
        type: 5,
        title: "Palm Pay Settings",
        palmpayPayoutMinLimit: values?.palmpayPayoutMinLimit,
        palmpayPayoutMaxLimit: values?.palmpayPayoutMaxLimit,
      },
    };
    updateGeneralSettingsMutation(payload)
      .unwrap()
      .then((response) => {
        console.log(response, "sdglk");
        toast.success(response?.message ?? "");
      })
      .catch((err) => {
        console.log(err, "alskfn");
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
      validationSchema={SettingsValidationSchema}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className="main breadCrumb-main-div pb-0">
              <div className="pagetitle">
                <h1>Settings</h1>
              </div>
            </div>
            <div className="main breadCrumb-main-div mt-0 pt-0">
              <section className="section">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        {/* <h5 className="card-title">Bordered Tabs Justified</h5> */}

                        <ul
                          className="nav nav-tabs nav-tabs-bordered d-flex"
                          id="borderedTabJustified"
                          role="tablist"
                        >
                          <li
                            className="nav-item flex-fill"
                            role="presentation"
                          >
                            <button
                              className="nav-link w-100 active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#bordered-justified-home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Basic Settings
                            </button>
                          </li>
                          <li
                            className="nav-item flex-fill"
                            role="presentation"
                          >
                            <button
                              className="nav-link w-100"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#bordered-justified-profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Bank Account Information
                            </button>
                          </li>
                          <li
                            className="nav-item flex-fill"
                            role="presentation"
                          >
                            <button
                              className="nav-link w-100"
                              id="contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#bordered-justified-contact"
                              type="button"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Payment Option & Charges
                            </button>
                          </li>
                          <li
                            className="nav-item flex-fill"
                            role="presentation"
                          >
                            <button
                              className="nav-link w-100"
                              id="contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#refer-to-friend"
                              type="button"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Refer to Friend
                            </button>
                          </li>
                          <li
                            className="nav-item flex-fill"
                            role="presentation"
                          >
                            <button
                              className="nav-link w-100"
                              id="contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#palm-pay"
                              type="button"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Palm pay
                            </button>
                          </li>
                        </ul>
                        <div
                          className="tab-content pt-2"
                          id="borderedTabJustifiedContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="bordered-justified-home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            {/* <h5 className="card-title">BASIC SETTINGS</h5> */}
                            {/* <div className="nav-tabs-bordered"></div> */}
                            <div className="row mt-3">
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Currency Conversion Rate(%)"
                                  name="charges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Admin Email"
                                  name="adminEmail"
                                  errors={formikProps?.errors}
                                  placeholder="Admin Email"
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="phone"
                                  type="text"
                                  label="Admin Contact Number"
                                  name="adminContactNumber"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 9897866565"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  label="Admin Address"
                                  name="adminAddress"
                                  errors={formikProps?.errors}
                                  placeholder="Enter Address"
                                  maxLength={100}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="phone"
                                  type="text"
                                  label="Poli Payment Limit(AUD)"
                                  name="poliPaymentLimit"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 5000"
                                  maxLength={10}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="phone"
                                  type="text"
                                  label="Location Radius"
                                  name="requestRadius"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 10"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="phone"
                                  type="text"
                                  label="Log Time (mins)"
                                  name="requestTime"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 60"
                                  maxLength={10}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="phone"
                                  type="text"
                                  label="Number of hits"
                                  name="requestLimit"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 60"
                                  maxLength={10}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Mobile Money Charges"
                                  name="mobileMoneyCharge"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="KKBits Payid (Zai account)"
                                  name="zaiPayId"
                                  errors={formikProps?.errors}
                                  placeholder="eg. npp@kkbits.com"
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Instant PayID"
                                  name="novattiPayId"
                                  errors={formikProps?.errors}
                                  placeholder="eg. npp@kkbits.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="bordered-justified-profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="row mt-3">
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Bank Name"
                                  name="bankName"
                                  errors={formikProps?.errors}
                                  placeholder="eg. npp@kkbits.com"
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Account Holder Name"
                                  name="accountHolderName"
                                  errors={formikProps?.errors}
                                  placeholder="eg. npp@kkbits.com"
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Account No"
                                  name="accountNo"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={16}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="BSB"
                                  name="uniqueCode"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="bordered-justified-contact"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                          >
                            <div className="row mt-3">
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Card Charges (%)"
                                  name="cardCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Google Charges (%)"
                                  name="googleCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Apple Charges (%)"
                                  name="appleCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Zai Charges (Fixed)"
                                  name="zaiCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Direct charges (Fixed)"
                                  name="directCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Poli charges (Fixed)"
                                  name="poliCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Instant PayID Charges (Fixed)"
                                  name="novattiCharges"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="d-flex justify-content-between ">
                                <Controller
                                  control="checkbox"
                                  type="checkbox"
                                  label="Poli "
                                  name="poliPay"
                                  errors={formikProps?.errors}
                                />
                                <Controller
                                  control="checkbox"
                                  type="checkbox"
                                  label=" KKBits Payid "
                                  name="zaiPay"
                                  errors={formikProps?.errors}
                                />
                                <Controller
                                  control="checkbox"
                                  type="checkbox"
                                  label=" Direct Pay "
                                  name="directPay"
                                  errors={formikProps?.errors}
                                />
                                <Controller
                                  control="checkbox"
                                  type="checkbox"
                                  label="Instant PayID"
                                  name="novattiPay"
                                  errors={formikProps?.errors}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="refer-to-friend"
                            role="tabpanel"
                            aria-labelledby="refer-to-friend-tab"
                          >
                            <div className="row mt-3">
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Referring User (fixed amount AUD)"
                                  name="referringUser"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Referred User (fixed amount AUD)"
                                  name="referredUser"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Minimum amount for referred bonus"
                                  name="minimumAmountReferredBonus"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="palm-pay"
                            role="tabpanel"
                            aria-labelledby="palm-pay-tab"
                          >
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Palm pay min limit (NGN)"
                                  name="palmpayPayoutMinLimit"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                              <div className="col-md-6">
                                <Controller
                                  control="currencyInput"
                                  type="text"
                                  label="Palm pay max limit (NGN)"
                                  name="palmpayPayoutMaxLimit"
                                  errors={formikProps?.errors}
                                  placeholder="eg. 1.5"
                                  maxLength={10}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <FilterSubmitButton
                      bttnText={"Submit Details"}
                      loading={updateApiResponse}
                    />
                  </div>
                </div>
              </section>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SettingMainPage;
