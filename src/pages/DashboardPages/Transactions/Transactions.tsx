import Controller from "./../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TransactionTable from "./TransactionTable";
import {
  // useGetAllTransactionPostQuery,
  useLazyGetAllTransactionPostQuery,
} from "../../../Apis/transaction.Apis";
import { TransactionDetails } from "../../../models/TransactionDetails";
import PaginationComponent from "../../../components/CommonComponents/PaginationComponent";

const Transactions = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");

  // const { data, error, isLoading } = useGetAllTransactionPostQuery({
  //   page: activePage,
  // });

  const [getAllTransactionPost, { data, isLoading }] =
    useLazyGetAllTransactionPostQuery();

  // console.log(data, "datadatadatadataooo");
  const [transactionData, setTransactionData] =
    useState<TransactionDetails[]>();

  useEffect(() => {
    setTransactionData(data?.data);
  }, [data]);

  const initialValues = {};

  const handleDateChange = (value: any, formikProps: any) => {
    console.log(value, "esdnwlekndelfwnel");
  };

  useEffect(() => {
    getAllTransactionPost({
      page: activePage,
    });
  }, [activePage, getAllTransactionPost]);

  const onSubmit = (values: any) => {
    console.log(values, "sgldnl");
  };

  console.log(transactionData, "transactionDatatransactionData");
  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Transactions</h1>
          </div>
          {/* <FilterSubmitButton buttonType={"button"} bttnText="Add New" /> */}
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
                          <div className="d-flex flex-wrap align-items-start gap-3">
                            <div className="style-field">
                              <Controller
                                control="input"
                                type="text"
                                // className="w-50"
                                maxLength={50}
                                label="Beneficiary Name"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="eg. Alpha"
                              />
                            </div>
                            <div className="style-field">
                              <Controller
                                control="input"
                                type="text"
                                // className="w-50"
                                maxLength={50}
                                label="User Name"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="eg. 8787878783"
                              />
                            </div>
                            <div className="style-field">
                              <Controller
                                control="input"
                                type="text"
                                // className="w-50"
                                maxLength={50}
                                label="User Name"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="eg. Alpha"
                              />
                            </div>
                            <div className="style-field">
                              <Controller
                                control="input"
                                type="text"
                                // className="w-50"
                                maxLength={50}
                                label="User Name"
                                name="email"
                                errors={formikProps?.errors}
                                placeholder="eg. 8787878783"
                              />
                            </div>
                            <div className="style-field">
                              <Controller
                                control="select"
                                className="form-label"
                                label="Kyc status"
                                name="kyc"
                                options={[{ value: "Aadhar", label: "Aadhar" }]}
                                errors={formikProps?.errors}
                                placeholder="Choose kyc status"
                              />
                            </div>
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
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body table-card-body">
              <TransactionTable
                tableData={transactionData}
                loading={isLoading}
                // navToEdit={() => {}}
                // clickToDelete={() => {}}
              />
            </div>
          </div>
          {transactionData?.length && (
            <PaginationComponent
              activePage={activePage}
              allItems={data as any}
              limit={data?.perPage}
              setActivePage={setActivePage}
              setLimit={setLimit}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default Transactions;
