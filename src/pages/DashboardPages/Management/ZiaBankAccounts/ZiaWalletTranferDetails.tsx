import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React from "react";

const ZiaWalletTranferDetails = () => {
  const initialValues = {};

  const onSubmit = (values: any) => {
    console.log();
  };
  return (
    <>
      <div className="main breadCrumb-main-div pb-0 mt-0 pt-0">
        <div className="pagetitle">
          <h1>Zai Wallet transfer</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">INFO</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    // validationSchema={FaqSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdglknwleks");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                              <Controller
                                control="select"
                                type="text"
                                // maxLength={50}
                                label="Name"
                                name="wallet"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                            <div className="col-md-6">
                              <Controller
                                control="phone"
                                type="text"
                                maxLength={10}
                                label="Name"
                                name="amount"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                            <div className="">
                              <Controller
                                control="select"
                                type="text"
                                // maxLength={50}
                                label="Name"
                                name="toWallet"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                          </div>
                          <div className="text-end mt-3">
                            <FilterSubmitButton
                              bttnText="Submit"
                              // loading={AddApiLoading || UpdateApiLoading}
                            />
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZiaWalletTranferDetails;
