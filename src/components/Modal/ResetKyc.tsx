import { KycStatusRejectSchema } from "../../utilities/Schema";
import { Formik, Form } from "formik";
import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import Controller from "../FormFields/Controller";
import CommonButton from "../CommonComponents/Button/CommonButton";
import { useResetKycVerificationMutation } from "../../Apis/kycData.Apis";
import { IAPICommonErrorResponse } from "@/Apis/types";
import toast from "react-hot-toast";

interface KycProps {
  show?: boolean;
  hide: () => void;
  userId: number;
}

const ResetKyc: FC<KycProps> = (props) => {
  const { show, hide, userId } = props;
  const [resetKycVerification, { isLoading: statusChangeApiInProgress }] =
    useResetKycVerificationMutation();

  const initialValues = {
    rejectReason: "",
  };

  const onSubmit = (value: any) => {
    const payload = {
      rejectReason: value?.rejectReason,
      // status: 5,
      id: userId,
    };
    resetKycVerification(payload)
      .unwrap()
      .then((response) => {
        console.log(response, "sdlgnslkdn");
        toast.success("Kyc status updated successfully");
        hide();
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
  };

  return (
    <Modal show={show} onHide={hide} className="small-modal">
      <div className="modal-dialogs">
        <div className="modal-contents">
          <div className="modal-header">
            <div className="h5"> {"Reset Kyc status"}</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            ></button>
          </div>
          <Formik
            validationSchema={KycStatusRejectSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            {(formikProps) => {
              return (
                <Form>
                  <div className="modal-body">
                    <div className="amount-adjust">
                      <Controller
                        control="textarea"
                        type="text"
                        label="Enter reason"
                        name="rejectReason"
                        errors={formikProps?.errors}
                        placeholder="Enter text"
                        maxLength={100}
                      />
                    </div>
                    <div className="modal-footer justify-content-center">
                      <div className="adjust-amount-bttn mt-4">
                        {" "}
                        <CommonButton
                          buttonType={"Submit"}
                          bttnText={"Change"}
                          loading={statusChangeApiInProgress}
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

export default ResetKyc;
