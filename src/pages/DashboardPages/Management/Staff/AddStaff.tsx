import { StaffRoleSchema } from "../../../../utilities/Schema";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Formik, Form } from "formik";
import React from "react";

const AddStaff = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  };

  const onSubmit = (values: any) => {};
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Add Staff</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Details</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={StaffRoleSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdglknwleks");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <Controller
                                control="input"
                                type="text"
                                maxLength={50}
                                label="Name"
                                name="name"
                                errors={formikProps?.errors}
                                placeholder="Enter name"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <Controller
                                control="input"
                                type="email"
                                maxLength={50}
                                label="Email"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="Enter email"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <Controller
                                control="phone"
                                type="text"
                                maxLength={10}
                                label="Contact Number"
                                name="phone"
                                errors={formikProps?.errors}
                                placeholder="Enter contact number"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <Controller
                                control="password"
                                type="text"
                                maxLength={50}
                                label="Password"
                                name="password"
                                errors={formikProps?.errors}
                                placeholder="Enter password"
                              />
                            </div>

                            <div className="mb-2">
                              <Controller
                                control="select"
                                type="text"
                                maxLength={50}
                                label="Role"
                                name="role"
                                errors={formikProps?.errors}
                                placeholder="Select roles"
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

export default AddStaff;
