import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CommonButton from "../../../../components/CommonComponents/Button/CommonButton";
import {
  useDeletePostCategoryMutation,
  useLazyGetAllCategoryListingQuery,
} from "../../../../Apis/createCategory.Apis";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "@/Apis/types";
import CategoryTable from "./CategoryTable";
import { CategoryListing } from "../../../../models/CategoryType";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const BlogCategory = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");
  // const { data, isLoading } = useGetAllCategoryListingQuery({});
  const [getAllCategory, { data, isLoading }] =
    useLazyGetAllCategoryListingQuery({});

  const [deleteCategoryMutation] = useDeletePostCategoryMutation();

  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<CategoryListing[]>();

  const navTo = () => {
    navigate(`/dashboard/manageblogcategory/add`);
  };

  const navToEdit = (id: number) => {
    navigate(`/dashboard/manageblogcategory/edit/${id}`);
  };

  console.log(data, "datasdlnvldknv");
  useEffect(() => {
    setCategoryList(data?.data);
  }, [data]);

  const deleteRecord = (id: number) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete role.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteCategoryMutation({ id })
              .unwrap()
              .then((response) => {
                console.log(response, "sdlgnslkdn");
                getAllCategory({});
                toast.success("Kyc status updated successfully");
              })
              .catch((error: IAPICommonErrorResponse) => {
                toast.error(error?.message ?? "");
              }),
        },
        {
          label: "No",
          onClick: () => {}, // It's good practice to define an empty function for clarity.
        },
      ],
    });
  };

  useEffect(() => {
    getAllCategory({
      page: activePage,
    });
  }, [activePage, getAllCategory]);

  console.log(categoryList, "datadata");
  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Dashboard</h1>
          </div>
          <CommonButton
            buttonType={"button"}
            bttnText="Add New"
            onClickBttn={() => navTo()}
          />
        </div>
      </div>

      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <CategoryTable
                tableData={categoryList}
                loading={isLoading}
                navToEdit={(e: number) => {
                  navToEdit(e);
                }}
                clickToDelete={(e: number) => {
                  deleteRecord(e);
                }}
              />
            </div>
          </div>
          {categoryList?.length && (
            <PaginationComponent
              activePage={activePage}
              allItems={data as any}
              limit={data?.perPage ?? 20}
              setActivePage={setActivePage}
              setLimit={setLimit}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default BlogCategory;
