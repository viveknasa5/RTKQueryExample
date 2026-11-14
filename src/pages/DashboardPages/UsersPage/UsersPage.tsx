import { formatePhoneNumber } from "./../../../utilities/Utillities";
import Controller from "../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  // useGetAllUserQuery,
  useLazyGetAllUserQuery,
} from "../../../Apis/userDetails.Api";
import { UserDetail } from "../../../models/UserDetails";
import UsersTable from "./UsersTable";
import { IAPICommonError } from "../../../Apis/types";
import toast from "react-hot-toast";
import ChangeEmail from "../../../components/Modal/ChangeEmail";
import ChangeMobile from "../../../components/Modal/ChangeMobile";
import PaginationComponent from "../../../components/CommonComponents/PaginationComponent";

const UsersPage = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");

  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [userList, setUserList] = useState<UserDetail[]>();
  const [changeEmailPopup, setChangeEmailPopup] = useState<boolean>(false);
  const [selectedUserData, setSelectedUserData] = useState<UserDetail>();
  const [changeMobilePopup, setChangeMobilePopup] = useState<boolean>(false);
  // const { data, isLoading, error } = useGetAllUserQuery({});
  const [getAllUser, { data, isLoading, error }] = useLazyGetAllUserQuery({});

  const initialValues = {
    name: "",
    mobile: "",
    kyc: "",
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formatePhoneNumber(e.target.value, 10);
    setMobileNumber(inputValue);
  };

  const onSubmit = (values: any) => {
    console.log(values, "sdgsle");
  };

  useEffect(() => {
    setUserList(data?.data);
  }, [data]);

  useEffect(() => {
    if ((error as IAPICommonError)?.message) {
      toast.error((error as IAPICommonError)?.message ?? "");
    }
  }, [error]);

  const handleQuery = () => {
    getAllUser({});
  };

  useEffect(() => {
    getAllUser({
      page: activePage,
    });
  }, [activePage, getAllUser]);

  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Users</h1>
        </div>
      </div>

      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <Formik
                    onSubmit={onSubmit}
                    // validationSchema={}
                    initialValues={initialValues}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdlgnlskndglk");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-3">
                              <Controller
                                control="input"
                                type="text"
                                // className="w-50"
                                maxLength={50}
                                label="User Name"
                                name="name"
                                errors={formikProps?.errors}
                                placeholder="Enter user name"
                              />
                            </div>

                            <div className="col-md-3">
                              <Controller
                                control="phone"
                                type="text"
                                label="Phone Number"
                                name="mobile"
                                errors={formikProps?.errors}
                                placeholder="Enter phone number"
                                maxLength={10}
                                value={mobileNumber}
                                onInput={handleMobileChange}
                              />
                            </div>

                            <div className="col-md-3">
                              <Controller
                                control="select"
                                className="form-label"
                                // classNamePrefix=""
                                label="Kyc status"
                                name="kyc"
                                options={[{ value: "Aadhar", label: "Aadhar" }]}
                                errors={formikProps?.errors}
                                placeholder="Choose kyc status"
                              />
                            </div>
                            <div className="col-md-3">
                              <button
                                className="btn btn-primary w-50 mt-4"
                                type="submit"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
              <div className="card">
                <div className="card-body pt-0">
                  {/* <!-- Table with stripped rows --> */}
                  <UsersTable
                    data={userList}
                    loading={isLoading}
                    ChangeEmail={(e: UserDetail) => {
                      setChangeEmailPopup(true);
                      setSelectedUserData(e);
                    }}
                    ChangeMobile={(e: UserDetail) => {
                      setSelectedUserData(e);
                      setChangeMobilePopup(true);
                    }}
                  />

                  {/* <!-- End Table with stripped rows --> */}
                </div>
              </div>
              {userList?.length && (
                <PaginationComponent
                  activePage={activePage}
                  allItems={data as any}
                  limit={data?.perPage ?? 20}
                  setActivePage={setActivePage}
                  setLimit={setLimit}
                />
              )}
            </div>
          </div>
        </section>
      </div>
      <ChangeEmail
        show={changeEmailPopup}
        hide={() => setChangeEmailPopup(false)}
        userData={selectedUserData}
        refreshList={() => handleQuery()}
      />
      <ChangeMobile
        show={changeMobilePopup}
        hide={() => setChangeMobilePopup(false)}
        userData={selectedUserData}
        refreshList={() => handleQuery()}
      />
    </>
  );
};

export default UsersPage;
