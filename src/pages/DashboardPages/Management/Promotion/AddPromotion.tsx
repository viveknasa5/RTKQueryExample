import { PromotionSchema } from "../../../../utilities/Schema";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Formik, Form } from "formik";
import React from "react";

const AddPromotion = () => {
  const initialValues = {
    title: "",
    type: "",
    imageId: "",
  };
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Add promotion</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Detail</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={PromotionSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdglknwleks");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Title"
                                  name="title"
                                  errors={formikProps?.errors}
                                  placeholder="eg. Healty"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="">
                                <Controller
                                  control="select"
                                  type="text"
                                  maxLength={50}
                                  label="Type"
                                  options={[]}
                                  name="type"
                                  errors={formikProps?.errors}
                                  placeholder="Select promotion type"
                                />
                              </div>
                            </div>
                            <div className="">
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
                          <div className="text-end mt-3">
                            <FilterSubmitButton
                              bttnText="Submit"
                              //   loading={AddApiLoading || UpdateApiLoading}
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

export default AddPromotion;
