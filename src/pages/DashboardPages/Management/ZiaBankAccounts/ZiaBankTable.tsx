import React from "react";

const ZiaBankTable = () => {
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0 mt-0 pt-0">
        <div className="pagetitle">
          <h1>Zai Bank Accounts</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table datatable table-currency">
                  <thead className="table-thead table-header-fixed">
                    <tr className="table-tr">
                      <th className="table-th">Sr.No.</th>
                      <th className="table-th">Name </th>
                      <th className="table-th">Amount</th>
                      <th className="table-th"> Email</th>
                      <th className="table-th">Withdraw </th>
                      <th className="table-th">Action </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZiaBankTable;
