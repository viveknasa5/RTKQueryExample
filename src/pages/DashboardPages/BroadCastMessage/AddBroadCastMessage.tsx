import FilterSubmitButton from "../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../components/FormFields/Controller";
import { Formik, Form } from "formik";
import React from "react";

const AddBroadCastMessage = () => {
  const initialValues = {
    subject: "",
    answer: "",
    imageId: "",
  };

  const onSubmit = (values: any) => {
    // [console.log(values, "sdgjsekld")];
  };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Add Broadcast Message</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DETAIL</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    // validationSchema={AddBlogSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdnbgwem");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-12">
                              <Controller
                                control="input"
                                type="text"
                                maxLength={50}
                                label="Subject"
                                name="subject"
                                errors={formikProps?.errors}
                                placeholder="Enter subject"
                              />
                            </div>
                            <div className="col-md-12 mt-3">
                              <Controller
                                control="textarea"
                                type="text"
                                label="Answer"
                                name="answer"
                                errors={formikProps?.errors}
                                placeholder="Answer"
                              />
                            </div>
                            <div className="col-md-12 mt-3">
                              <Controller
                                control="fileuploader"
                                type="text"
                                label="Cover Image"
                                name="imageId"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                          </div>
                          <div className="text-end mt-12">
                            <FilterSubmitButton
                              bttnText="Submit"
                              //   loading={ApiLoading}
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
    </div>
  );
};

export default AddBroadCastMessage;
