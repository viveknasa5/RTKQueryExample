import { UserDetail } from "@/models/UserDetails";
import { Formik, Form } from "formik";
import React, { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Controller from "../FormFields/Controller";
import { useUpdateEmailMobileInUserDetailsMutation } from "../../Apis/userDetails.Api";
import { formatePhoneNumber } from "../../utilities/Utillities";
import toast from "react-hot-toast";
import CommonButton from "../CommonComponents/Button/CommonButton";

interface ModalProps {
  show?: boolean;
  hide: () => void;
  userData?: UserDetail;
  refreshList?: () => void;
}
const ChangeMobile: FC<ModalProps> = (props) => {
  const { show, hide, userData, refreshList = () => {} } = props;
  const [mobileNum, setMobileNum] = useState<any>();

  const [updateEmailMobileDetailsMutation, { isLoading: loginApiInProgress }] =
    useUpdateEmailMobileInUserDetailsMutation();

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formatePhoneNumber(e.target.value, 10);
    setMobileNum(inputValue);
  };

  useEffect(() => {
    setMobileNum(userData?.mobile);
  }, [userData]);

  const initialValues = {
    mobile: userData?.mobile,
    userId: userData?.id,
  };

  const onSubmit = (values: any) => {
    const payload = {
      userId: values.userId,
      mobile: values?.mobile,
    };

    updateEmailMobileDetailsMutation(payload)
      .unwrap()
      .then((response) => {
        // console.log(response, "sglkwnel");
        toast.success(response?.message ?? "");
        refreshList();
        hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal show={show} onHide={hide} className="small-modal">
        <div className="modal-dialogs">
          <div className="modal-contents">
            <div className="modal-header">
              <div className="h5">Change Mobile no.</div>
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
                          control="phone"
                          type="text"
                          label="Enter Mobile No."
                          name="mobile"
                          errors={formikProps?.errors}
                          placeholder="Mobile no."
                          maxLength={10}
                          value={mobileNum}
                          onInput={handleMobileChange}
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
    </>
  );
};

export default ChangeMobile;
