import React from "react";

const ZaiDataTable = () => {
  return (
    <div>
      <div className="table-responsive">
        <table className="table datatable transaction-table">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">User name </th>
              <th className="table-th">Transaction id </th>
              <th className="table-th">Transaction id </th>
              <th className="table-th">Account type </th>
              <th className="table-th">Type</th>
              <th className="table-th">Amount</th>
              <th className="table-th">Debit credit </th>
              <th className="table-th">Description</th>
              <th className="table-th">Status</th>
              <th className="table-th">Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ZaiDataTable;
