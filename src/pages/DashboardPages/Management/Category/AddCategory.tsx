import { Form, Formik } from "formik";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import React, { useEffect, useState } from "react";
import Controller from "../../../../components/FormFields/Controller";
import {
  useAddPostCategoryMutation,
  useGetAllCategoryListByIdQuery,
  useUpdatePostCategoryMutation,
} from "../../../../Apis/createCategory.Apis";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllCategoryListingDataQuery } from "../../../../Apis/categoriesTypes.Apis";
import { CategorySchema } from "../../../../utilities/Schema";

const AddCategory = () => {
  const [categoryType, setCategoryType] = useState<any>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [addCategoryTypeMutation, { isLoading: ApiLoading }] =
    useAddPostCategoryMutation();
  const [updateCategoryTypeMutation] = useUpdatePostCategoryMutation();

  const { data } = useGetAllCategoryListingDataQuery({});

  useEffect(() => {
    setCategoryType(data?.data);
  }, [data]);

  const { data: categoryData } = useGetAllCategoryListByIdQuery({
    id: parseInt(id ? id : ""),
  });

  console.log(categoryData, "=======kkkk");

  const initialValues = {
    name: categoryData?.name ?? "",
    categoryTypeCode: categoryData?.categorytype?.code ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      name: values?.name,
      categoryTypeCode: values?.categoryTypeCode,
    };

    if (id) {
      updateCategoryTypeMutation({ body: payload, id: id })
        .unwrap()
        .then((response) => {
          console.log(response, "sglje");
          navigate("/dashboard/manageblogcategory");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addCategoryTypeMutation(payload)
        .unwrap()
        .then((response) => {
          navigate("/dashboard/manageblogcategory");
          console.log(response, "sdgknskl");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Add Blog Category</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">BLOGS</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={CategorySchema}
                  >
                    {(formikProps) => {
                      return (
                        <Form>
                          <div className="">
                            <Controller
                              control="input"
                              type="text"
                              maxLength={50}
                              label="Name"
                              name="name"
                              errors={formikProps?.errors}
                              placeholder="Enter name "
                            />
                          </div>
                          <div className="mt-3">
                            <Controller
                              control="select"
                              type="text"
                              maxLength={50}
                              label="Select category."
                              name="categoryTypeCode"
                              options={categoryType?.map((category: any) => ({
                                value: category?.code,
                                label: category?.name,
                              }))}
                              errors={formikProps?.errors}
                              placeholder="Select category code."
                            />
                          </div>
                          <div className="mt-3 text-end">
                            <FilterSubmitButton
                              buttonType={"submit"}
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

export default AddCategory;
