import React, { FC } from "react";
import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";
import { EmailTemplateProps } from "../../../../models/EmailTemplate";
import IconButton from "../../../../components/CommonComponents/Button/IconButton";

interface EmailTableProps {
  tableData?: EmailTemplateProps[];
  loading: boolean;
  navToEdit: (e: number) => void;
  clickToDelete: (e: number) => void;
}
const TemplateTable: FC<EmailTableProps> = (props) => {
  const { tableData, loading, navToEdit, clickToDelete } = props;

  return (
    <div>
      <div className="table-responsive email-tbl-height">
        <table className="table datatable table-email-template">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Title</th>
              <th className="table-th">Subject</th>
              <th className="table-th"> Action</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={3} action={true} />
          ) : (
            <tbody>
              {tableData?.length
                ? tableData?.map((item: EmailTemplateProps, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{1 + index}</td>
                        <td>{item?.title ?? "-"}</td>
                        <td>{item?.subject ?? "-"}</td>
                        <td>
                          <div className="d-flex gap-3 justify-content-center">
                            <div className="">
                              <IconButton
                                onBttnClick={() => navToEdit(item?.id)}
                                bttnAction="Edit"
                              />
                            </div>
                            <div className="">
                              <IconButton
                                onBttnClick={() => {
                                  clickToDelete(item?.id);
                                }}
                                bttnAction="Delete"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TemplateTable;
