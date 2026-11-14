import React from "react";

const BroadCastTable = () => {
  return (
    <div>
      <div className="table-responsive transaction-table-height">
        <table className="table datatable table-kyc">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">SR.NO.</th>
              <th className="table-th">Subject</th>
              <th className="table-th">Message </th>

              <th className="table-th">ACTION</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default BroadCastTable;
