import { useGetAllCategoryListingDataQuery } from "../../../../Apis/categoriesTypes.Apis";
import {
  useAddNewBlogPostMutation,
  useUpdateBlogPostMutation,
  useLazyGetBlogPostByIdQuery,
} from "../../../../Apis/blogPost.Apis";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryListing } from "../../../../models/CategoryType";
import { AddBlogSchema } from "../../../../utilities/Schema";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: catagoryListing } = useGetAllCategoryListingDataQuery({});
  const [categoryList, setCategoryList] = useState<CategoryListing[]>();

  const [getBlogPostById, { data: blogPostData }] =
    useLazyGetBlogPostByIdQuery();

  console.log(blogPostData, "kkkkkkkkkk");

  useEffect(() => {
    if (id) {
      getBlogPostById({ id: parseInt(id ?? "") });
    }
  }, [id, getBlogPostById]);

  const [addNewBlogMutation, { isLoading: ApiLoading }] =
    useAddNewBlogPostMutation();

  const [updateBlogPostMutation] = useUpdateBlogPostMutation();

  const initialValues = {
    title: blogPostData?.title ?? "",
    description: blogPostData?.description ?? "",
    excerpt: blogPostData?.excerpt ?? "",
    categoryId: blogPostData?.categoryId ?? "",
    imageId: blogPostData?.imageId ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      title: values?.title,
      description: values?.description,
      excerpt: values?.excerpt,
      categoryId: values?.categoryId,
      postType: "post",
      imageId: values?.imageId?.id,
    };
    console.log(payload, "payloadpayload");
    if (id) {
      updateBlogPostMutation({ body: payload, id: id })
        .unwrap()
        .then((response) => {
          console.log(response, "sglje");
          navigate("/dashboard/bloglisting");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addNewBlogMutation(payload)
        .unwrap()
        .then((response) => {
          navigate("/dashboard/bloglisting");
          console.log(response, "sdgknskl");
        })
        .catch((err) => {
          console.log(err, "=======");
          toast.error(err?.message);
        });
    }
  };

  useEffect(() => {
    setCategoryList(catagoryListing?.data);
  }, [catagoryListing]);
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Add Blog</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DETAIL</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={AddBlogSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdnbgwem");
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                              <Controller
                                control="input"
                                type="text"
                                maxLength={50}
                                label="Name"
                                name="title"
                                errors={formikProps?.errors}
                                placeholder="Enter title"
                              />
                            </div>
                            <div className="col-md-6">
                              <Controller
                                control="select"
                                className="form-label"
                                // classNamePrefix=""
                                label="Category type"
                                name="categoryId"
                                options={categoryList?.map((category: any) => ({
                                  value: category?.id,
                                  label: category?.name,
                                }))}
                                errors={formikProps?.errors}
                                placeholder="Select Category"
                              />
                            </div>
                            <div className="col-md-12">
                              <Controller
                                control="textarea"
                                type="text"
                                label="Short Description"
                                name="excerpt"
                                errors={formikProps?.errors}
                                placeholder="Enter short description"
                              />
                            </div>
                            <div className="col-md-12 mt-3">
                              <Controller
                                control="fileuploader"
                                type="text"
                                label="Cover Image"
                                name="imageId"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                            <div className="col-md-12 mt-3">
                              <Controller
                                control="textEditor"
                                type="text"
                                label="Cover Image"
                                name="description"
                                errors={formikProps?.errors}
                                placeholder="eg. Healty"
                              />
                            </div>
                          </div>
                          <div className="text-end mt-3">
                            <FilterSubmitButton
                              bttnText="Submit"
                              loading={ApiLoading}
                            />
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddBlog;
