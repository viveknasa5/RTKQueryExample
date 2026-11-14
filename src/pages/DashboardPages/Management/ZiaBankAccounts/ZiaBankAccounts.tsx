import RoundedButton from "../../../../components/CommonComponents/Button/RoundedButton";
import React from "react";
import ZiaWalletTranferDetails from "./ZiaWalletTranferDetails";
import ZiaBankTable from "./ZiaBankTable";

const ZiaBankAccounts = () => {
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Zai Bank Account</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <h1 className="h3 mb-3">Wallet Transfer</h1>
              <p className="h6">
                Click the below button to transfer the money from user`s wallet
                account to KKBits wallet.
              </p>
              <div className="mt-3">
                <RoundedButton bttnText="Wallet transfer" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ZiaBankTable />
      <ZiaWalletTranferDetails />
    </div>
  );
};

export default ZiaBankAccounts;
