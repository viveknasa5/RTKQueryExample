import React from "react";

const SourceAccountTable = () => {
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable ">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th"> Account name </th>
              <th className="table-th"> Account name </th>
              <th className="table-th"> BSB </th>
              <th className="table-th">Balance </th>
              <th className="table-th"> Account type </th>
              <th className="table-th"> Withdraw </th>
              <th className="table-th"> Action </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default SourceAccountTable;
