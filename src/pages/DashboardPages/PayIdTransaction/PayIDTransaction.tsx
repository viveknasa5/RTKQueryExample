import React from "react";
import TransactionTable from "./TransactionTable";

const PayIDTransaction = () => {
  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Instant PayID Transactions</h1>
          </div>
          {/* <CommonButton
          buttonType={"button"}
          bttnText="Add New"
          onClickBttn={() => navTo()}
        /> */}
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <TransactionTable />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PayIDTransaction;
