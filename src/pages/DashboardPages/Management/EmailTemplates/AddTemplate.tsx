// import toast from "react-hot-toast";
import { EmailTemplateSchema } from "../../../../utilities/Schema";
import {
  useLazyGetEmailTemplateByIdQuery,
  useSetYourEmailTemplateMutation,
  useUpdateEmailTemplateByIdMutation,
} from "../../../../Apis/emailTemplate.Apis";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddTemplate = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [addEmailTemplate, { isLoading: AddTemplateLoading }] =
    useSetYourEmailTemplateMutation();

  // const [
  //   getBlogPostById,
  //   { data: blogPostData, isLoading: isFetching, error: isError },
  // ] = useLazyGetBlogPostByIdQuery();

  const [getEmailTemplateById, { data }] = useLazyGetEmailTemplateByIdQuery();

  const [updateEmailTemplateMutation] = useUpdateEmailTemplateByIdMutation();

  console.log(data, "datadatadatadatadatadata");
  const initialValues = {
    title: data?.title ?? "",
    subject: data?.subject ?? "",
    message: data?.message ?? "",
    code: data?.code ?? "",
    replacements: data?.replacements ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      title: values?.title,
      subject: values?.subject,
      message: values?.message,
      code: values?.code,
      replacements: values?.replacements,
    };

    if (id) {
      updateEmailTemplateMutation({ body: payload, id: id })
        .unwrap()
        .then((response) => {
          navigate("/dashboard/email-templates");
          console.log(response, "sgldknwlke");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addEmailTemplate(payload)
        .unwrap()
        .then((response) => {
          console.log(response?.data, "selgkwlk");
          navigate("/dashboard/email-templates");
          // toast.success()
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(payload, "sdlgknwke");
    }
  };

  useEffect(() => {
    if (id) {
      getEmailTemplateById({ id: parseInt(id ?? "") });
    }
  }, [id, getEmailTemplateById]);
  return (
    <>
      <div>
        <div className="main breadCrumb-main-div pb-0">
          <div className="d-flex justify-content-between mb-3 mt-2">
            <div className="pagetitle">
              <h1>Add Email Template</h1>
            </div>
          </div>
        </div>
        <div className="main breadCrumb-main-div mt-0 pt-0">
          <section className="section">
            <div className="row">
              <div className="col-md-9">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Email Template</h5>
                    <div className="nav-tabs-bordered mb-3"> </div>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      enableReinitialize={true}
                      validationSchema={EmailTemplateSchema}
                    >
                      {(formikProps) => {
                        return (
                          <Form>
                            <div className="row">
                              <div className="col-md-6">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Title"
                                  name="title"
                                  errors={formikProps?.errors}
                                  placeholder="Enter title "
                                />
                              </div>
                              <div className="col-md-6">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Subject"
                                  name="subject"
                                  errors={formikProps?.errors}
                                  placeholder="Enter subject "
                                />
                              </div>
                              <div className="col-md-6">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Uniqe Code"
                                  name="code"
                                  errors={formikProps?.errors}
                                  placeholder="Enter code "
                                />
                              </div>
                              <div className="col-md-6">
                                <Controller
                                  control="input"
                                  type="text"
                                  maxLength={50}
                                  label="Replacements"
                                  name="replacements"
                                  errors={formikProps?.errors}
                                  placeholder="Enter replacement text "
                                />
                              </div>
                              <div className="">
                                <Controller
                                  control="textEditor"
                                  type="text"
                                  maxLength={50}
                                  label="Message"
                                  name="message"
                                  errors={formikProps?.errors}
                                  placeholder="Enter message "
                                />
                              </div>
                              {/* <div className="mt-3">
                              <Controller
                                control="select"
                                type="text"
                                maxLength={50}
                                label="Enter category code"
                                name="categoryTypeCode"
                                options={categoryType?.map((category: any) => ({
                                  value: category?.code,
                                  label: category?.name,
                                }))}
                                errors={formikProps?.errors}
                                placeholder="Enter code of the category "
                              />
                            </div> */}
                            </div>
                            <div className="mt-3 text-end">
                              <FilterSubmitButton
                                buttonType={"submit"}
                                bttnText="Submit"
                                loading={AddTemplateLoading}
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
    </>
  );
};

export default AddTemplate;
