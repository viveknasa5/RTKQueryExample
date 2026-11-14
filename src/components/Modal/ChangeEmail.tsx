import { UserDetail } from "@/models/UserDetails";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import Controller from "../FormFields/Controller";
import { useUpdateEmailMobileInUserDetailsMutation } from "../../Apis/userDetails.Api";
import toast from "react-hot-toast";
import CommonButton from "../CommonComponents/Button/CommonButton";

interface ModalProps {
  show?: boolean;
  hide: () => void;
  userData?: UserDetail;
  refreshList?: () => void;
}
const ChangeEmail: FC<ModalProps> = (props) => {
  const { show, hide, userData, refreshList = () => {} } = props;
  const [updateEmailMobileDetailsMutation, { isLoading: loginApiInProgress }] =
    useUpdateEmailMobileInUserDetailsMutation();

  const initialValues = {
    email: userData?.email,
    userId: userData?.id,
  };

  const onSubmit = (values: any) => {
    const payload = {
      userId: values.userId,
      email: values?.email,
    };
    updateEmailMobileDetailsMutation(payload)
      .unwrap()
      .then((response) => {
        // console.log(response.message, "sglkwnel");
        toast.success(response?.message ?? "");
        refreshList();
        hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal show={show} onHide={hide} className="small-modal">
      <div className="modal-dialogs">
        <div className="modal-contents">
          <div className="modal-header">
            <div className="h5">Change Email</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            ></button>
          </div>
          <Formik
            // validationSchema={}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            {(formikProps) => {
              return (
                <Form>
                  <div className="modal-body">
                    <div className="amount-adjust">
                      <Controller
                        control="input"
                        type="text"
                        label="Enter email"
                        name="email"
                        errors={formikProps?.errors}
                        placeholder="Enter email"
                        // maxLength={10}
                      />
                    </div>
                    <div className="modal-footer justify-content-center">
                      <div className="adjust-amount-bttn mt-4">
                        {" "}
                        <CommonButton
                          buttonType={"Submit"}
                          bttnText={"Change"}
                          loading={loginApiInProgress}
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeEmail;
