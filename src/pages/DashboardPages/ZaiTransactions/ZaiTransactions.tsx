import FilterSubmitButton from "../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../components/FormFields/Controller";
import { Formik, Form } from "formik";
import React from "react";
import ZaiDataTable from "./ZaiDataTable";

const ZaiTransactions = () => {
  const initialValues = {
    transactiontype: "",
    method: "",
    type: "",
  };

  const handleDateChange = (value: any, formikProps: any) => {
    console.log(value, "esdnwlekndelfwnel");
  };
  const onSubmit = (value: any) => {};
  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Zai Transactions</h1>
          </div>
          <FilterSubmitButton buttonType={"button"} bttnText="Download CSV" />
        </div>
      </div>

      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(formikProps) => {
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-2">
                              <div className="style-field">
                                <Controller
                                  control="select"
                                  className="form-label"
                                  label="Transaction type"
                                  name="transactiontype"
                                  options={[
                                    { value: "Aadhar", label: "Aadhar" },
                                  ]}
                                  errors={formikProps?.errors}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="style-field">
                                <Controller
                                  control="select"
                                  className="form-label"
                                  label="Transaction Method"
                                  name="method"
                                  options={[
                                    { value: "Aadhar", label: "Aadhar" },
                                  ]}
                                  errors={formikProps?.errors}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="style-field">
                                <Controller
                                  control="select"
                                  className="form-label"
                                  label="Type"
                                  name="kyc"
                                  options={[
                                    { value: "Aadhar", label: "Aadhar" },
                                  ]}
                                  errors={formikProps?.errors}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="style-field">
                                <Controller
                                  control="daterangepicker"
                                  name="date"
                                  label="Choose Filter Date"
                                  className="form-control"
                                  // fromValue={queryParams.[from} // Pass the from date value from queryParams
                                  // toValue={queryParams.to}]
                                  onChange={(value) =>
                                    handleDateChange(value, formikProps)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="style-field">
                                <FilterSubmitButton className="mt-31 btn btn-primary" />
                              </div>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <ZaiDataTable />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZaiTransactions;
