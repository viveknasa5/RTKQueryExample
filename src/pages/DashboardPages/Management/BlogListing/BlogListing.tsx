import React, { useEffect, useState } from "react";
import CommonButton from "../../../../components/CommonComponents/Button/CommonButton";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBlogPostMutation,
  useGetAllBlogPostQuery,
  useLazyGetAllBlogPostQuery,
} from "../../../../Apis/blogPost.Apis";
import BlogTable from "./BlogTable";
import { confirmAlert } from "react-confirm-alert";
import { PostDetails } from "../../../../models/BlogPost";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "@/Apis/types";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const BlogListing = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "sdlgk");
  const { data, isLoading } = useGetAllBlogPostQuery({});
  const [getAllBlogs] = useLazyGetAllBlogPostQuery();
  // const [getAllCategory] = useLazyGetAllBlogPostQuery({});
  const [blogListData, setBlogListData] = useState<PostDetails[]>();
  const [deleteBlogPost] = useDeleteBlogPostMutation();

  console.log(data, "datadata");

  const navigate = useNavigate();

  const navTo = () => {
    navigate(`/dashboard/bloglisting/add`);
  };
  const navToEdit = (id: number) => {
    navigate(`/dashboard/bloglisting/edit/${id}`);
  };

  const deleteRecord = (id: number) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete role.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteBlogPost({ id })
              .unwrap()
              .then((response) => {
                console.log(response, "sdlgnslkdn");
                getAllBlogs({});
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
    getAllBlogs({
      page: activePage,
    });
  }, [activePage, getAllBlogs]);

  useEffect(() => {
    setBlogListData(data?.data);
  }, [data]);
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Blogs Listing</h1>
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
              <BlogTable
                tableData={blogListData}
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
          {blogListData?.length && (
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
    </div>
  );
};

export default BlogListing;
