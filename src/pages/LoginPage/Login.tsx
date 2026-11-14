import React, { useEffect } from "react";
import Controller from "../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import { IAPICommonErrorResponse, IUserLoginArgs } from "@/Apis/types";
import { useLoginMutation } from "../../Apis/user.Api";
import { LoginSchema } from "./../../utilities/Schema";
import { useDispatch } from "react-redux";
import { GetAccessToken, setUserInfo } from "../../redux/user/user-slice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Login = () => {
  const [loginMutation, { isLoading: loginApiInProgress }] = useLoginMutation();
  const token = useSelector(GetAccessToken);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    let loginParams: IUserLoginArgs = {
      email: values?.email,
      password: values?.password,
    };
    loginMutation(loginParams)
      .unwrap()
      .then((response) => {
        const token = response?.token;
        console.log(token, "sdlgnslkdn");

        dispatch(setUserInfo({ token, user: response }));
        navigate("/dashboard/users");
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard/users");
    }
  }, [token]);

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  {/* <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="/assets/imges/logo-dark.svg" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a> */}
                </div>
                {/* <!-- End Logo --> */}

                <div className="card mb-3">
                  <div className="card-body p-4">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center text-blu pb-0 fs-18">
                        <img src="/assets/images/logo-dark.svg" alt="" />
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={LoginSchema}
                    >
                      {(formikProps) => {
                        console.log(formikProps, "formikProps");
                        return (
                          <Form className="row g-3 needs-validation">
                            <div className="col-12">
                              <Controller
                                control="input"
                                type="text"
                                maxLength={50}
                                label="User Name"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="Enter user name"
                              />
                            </div>

                            <div className="col-12">
                              <Controller
                                control="password"
                                type="password"
                                maxLength={50}
                                label="Enter your password"
                                name="password"
                                errors={formikProps?.errors}
                                placeholder="Enter password"
                              />
                            </div>

                            <div className="col-12">
                              <button
                                className="btn btn-primary w-100"
                                type="submit"
                              >
                                {loginApiInProgress ? (
                                  <img
                                    src="/assets/images/whiteloader.gif"
                                    className="h-23"
                                    alt=""
                                  />
                                ) : (
                                  "Login"
                                )}
                              </button>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
