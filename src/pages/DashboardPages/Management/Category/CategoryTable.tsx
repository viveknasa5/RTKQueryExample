import { CategoryListing } from "../../../../models/CategoryType";
import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";
import React, { FC } from "react";
import IconButton from "../../../../components/CommonComponents/Button/IconButton";

interface CategroyTableProps {
  tableData?: CategoryListing[];
  loading: boolean;
  navToEdit: (e: number) => void;
  clickToDelete: (e: number) => void;
}
const CategoryTable: FC<CategroyTableProps> = (props) => {
  const { tableData, loading, navToEdit, clickToDelete } = props;
  return (
    <div>
      <div className="table-responsive category-tbl-height ">
        <table className="table datatable table-category">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Category</th>
              {/* <th className="table-th">Description</th> */}
              <th className="table-th"> Action</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={2} action={true} />
          ) : (
            <tbody>
              {tableData?.length
                ? tableData?.map((item: CategoryListing, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.name}</td>
                        {/* <td>{item?.description}</td> */}
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
                  })
                : ""}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
