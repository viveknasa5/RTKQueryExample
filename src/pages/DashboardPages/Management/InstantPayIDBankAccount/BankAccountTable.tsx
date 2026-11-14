import React from "react";

const BankAccountTable = () => {
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable ">
          <thead className="table-thead">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th"> Account name </th>
              <th className="table-th"> Account name </th>
              <th className="table-th"> Bank </th>
              <th className="table-th">Swiftcode </th>
              <th className="table-th"> Action </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default BankAccountTable;
