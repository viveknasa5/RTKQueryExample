import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";
import IconButton from "../../../../components/CommonComponents/Button/IconButton";
import { FAQItem } from "../../../../models/FaqDetails";
import React, { FC } from "react";

interface FaqTableProps {
  faqTableData?: FAQItem[];
  loading: boolean;
  navToEdit: (e: number) => void;
  clickToDelete: (e: number) => void;
}
const FaqTable: FC<FaqTableProps> = (props) => {
  const {
    faqTableData,
    loading,
    navToEdit = () => {},
    clickToDelete = () => {},
  } = props;
  return (
    <div>
      <div className="table-responsive faq-tbl-height">
        <table className="table datatable table-faq">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Question</th>
              <th className="table-th"> Action</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={2} action={true} />
          ) : (
            <tbody>
              {faqTableData?.map((item: FAQItem, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.question}</td>
                    <td>
                      <div className="d-flex gap-3">
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
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default FaqTable;
