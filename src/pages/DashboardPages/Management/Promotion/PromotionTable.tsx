import React from "react";

const PromotionTable = () => {
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable table-currency">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Title</th>
              <th className="table-th"> Type</th>
              <th className="table-th"> Status</th>
              <th className="table-th"> Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PromotionTable;
