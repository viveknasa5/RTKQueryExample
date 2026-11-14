import IconButton from "../../../../components/CommonComponents/Button/IconButton";
import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";
import React, { FC } from "react";
import { PostDetails } from "../../../../models/BlogPost";
import { useChangeBlogPostStatusByIdMutation } from "../../../../Apis/blogPost.Apis";
import SwitchBttn from "../../../../components/CommonComponents/Button/SwitchBttn";
import { IAPICommonErrorResponse } from "../../../../Apis/types";
import toast from "react-hot-toast";

interface BlogTableProps {
  tableData?: PostDetails[];
  loading: boolean;
  navToEdit: (e: number) => void;
  clickToDelete: (e: number) => void;
}
const BlogTable: FC<BlogTableProps> = (props) => {
  const { tableData, loading, navToEdit, clickToDelete } = props;
  const [changeBlogPostStatusById] = useChangeBlogPostStatusByIdMutation();

  console.log(tableData, "tableDatatableData");

  const changeStatus = (value: boolean, id: number) => {
    console.log(value, "sdgln");
    const payload = {
      status: value,
      id: id,
    };
    changeBlogPostStatusById(payload)
      .unwrap()
      .then((response) => {
        console.log(response, "sdkgsdlkg");
        toast.success(response.message ?? "");
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
  };
  return (
    <div>
      <div className="table-responsive blog-tbl-height">
        <table className="table datatable table-blogpost">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Title</th>
              <th className="table-th">Category</th>
              <th className="table-th">Status</th>
              <th className="table-th"> Action</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={4} action={true} />
          ) : (
            <tbody>
              {tableData?.length
                ? tableData?.map((item: PostDetails, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.title ?? "-"}</td>
                        <td>{item?.category?.name ?? "-"}</td>
                        <td>
                          <SwitchBttn
                            onInputChange={(value) => {
                              changeStatus(value, item?.id);
                            }}
                          />
                        </td>
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

export default BlogTable;
