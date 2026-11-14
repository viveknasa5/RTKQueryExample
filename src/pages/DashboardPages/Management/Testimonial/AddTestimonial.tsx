import { Formik, Form } from "formik";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import React from "react";
import Controller from "../../../../components/FormFields/Controller";
import { TestimonialSchema } from "../../../../utilities/Schema";

const AddTestimonials = () => {
  const initialValues = {
    userName: "",
    feedback: "",
  };

  const onSubmit = (value: any) => {};
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Add Testimonials</h1>
          </div>
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
                    validationSchema={TestimonialSchema}
                  >
                    {(formikProps) => {
                      return (
                        <Form>
                          <div className="">
                            <Controller
                              control="input"
                              type="text"
                              maxLength={50}
                              label="User Name"
                              name="name"
                              errors={formikProps?.errors}
                              placeholder="User Name"
                            />
                          </div>
                          <div className="mt-3">
                            <Controller
                              control="textarea"
                              type="text"
                              maxLength={50}
                              label="Feedback"
                              name="feedback"
                              errors={formikProps?.errors}
                              placeholder="Feedback"
                            />
                          </div>
                          <div className="text-end mt-3">
                            <FilterSubmitButton bttnText="Submit" />
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

export default AddTestimonials;
