import { Formik, Form } from "formik";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import React from "react";
import Controller from "../../../../components/FormFields/Controller";
import {
  useAddFaqMutation,
  useGetFaqDetailsByIdQuery,
  useUpdateFaqMutation,
} from "../../../../Apis/faq.Apis";
import { useNavigate, useParams } from "react-router-dom";
import { FaqSchema } from "../../../../utilities/Schema";

const AddFaq = () => {
  const [addFaqMutation, { isLoading: AddApiLoading }] = useAddFaqMutation();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: FaqData } = useGetFaqDetailsByIdQuery({
    id: parseInt(id ? id : ""),
  });

  const [updateFaqMutation, { isLoading: UpdateApiLoading }] =
    useUpdateFaqMutation();

  const initialValues = {
    question: FaqData?.question ?? "",
    answer: FaqData?.answer ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      question: values?.question,
      answer: values?.answer,
    };

    if (id) {
      updateFaqMutation({ body: payload, id: id })
        .unwrap()
        .then((response) => {
          console.log(response, "sglje");
          navigate("/dashboard/managefaq");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addFaqMutation(payload)
        .unwrap()
        .then((response) => {
          navigate("/dashboard/managefaq");
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
            <h1>Add FAQ</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">INFO</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={FaqSchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdglknwleks");
                      return (
                        <Form>
                          <div className="">
                            <Controller
                              control="input"
                              type="text"
                              maxLength={50}
                              label="Name"
                              name="question"
                              errors={formikProps?.errors}
                              placeholder="eg. Healty"
                            />
                          </div>
                          <div className="mt-3">
                            <Controller
                              control="textEditor"
                              type="text"
                              maxLength={50}
                              label="Name"
                              name="answer"
                              errors={formikProps?.errors}
                              placeholder="eg. Healty"
                            />
                          </div>
                          <div className="text-end mt-3">
                            <FilterSubmitButton
                              bttnText="Submit"
                              loading={AddApiLoading || UpdateApiLoading}
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

export default AddFaq;
