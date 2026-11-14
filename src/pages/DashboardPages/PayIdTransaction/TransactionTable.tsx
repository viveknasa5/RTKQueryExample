import React from "react";

const TransactionTable = () => {
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable table-pay-transaction">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Source account name </th>
              <th className="table-th"> Source account number </th>
              <th className="table-th"> Source BSB </th>
              <th className="table-th"> Amount </th>
              <th className="table-th"> Account name </th>
              <th className="table-th"> Account number </th>
              <th className="table-th"> BSB </th>
              <th className="table-th"> Running Balance </th>
              <th className="table-th"> Description </th>
              <th className="table-th"> Unique ID </th>
              <th className="table-th"> Transaction Type </th>
              <th className="table-th"> Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
