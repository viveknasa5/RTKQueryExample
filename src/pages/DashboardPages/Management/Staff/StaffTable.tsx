import React from "react";

const StaffTable = () => {
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable ">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th"> Name</th>
              <th className="table-th"> Email</th>
              <th className="table-th"> Permissions</th>
              <th className="table-th"> Contact Number </th>
              <th className="table-th"> Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;
