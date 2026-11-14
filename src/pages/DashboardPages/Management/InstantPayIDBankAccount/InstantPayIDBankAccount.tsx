import React from "react";
import BankAccountTable from "./BankAccountTable";
import SourceAccountTable from "./SourceAccountTable";

const InstantPayIDBankAccount = () => {
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Instant PayID Bank Accounts</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <BankAccountTable />
            </div>
          </div>
        </section>
      </div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3">
          <div className="pagetitle">
            <h1>Instant PayID Source Accounts</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <SourceAccountTable />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstantPayIDBankAccount;
