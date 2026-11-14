import { kyc } from "../../models/KycDetails";
import React, { FC } from "react";
import { Modal } from "react-bootstrap";

interface kycDetailsProps {
  onHide: () => void;
  show: boolean;
  data?: string;
}
const KycDetailPopup: FC<kycDetailsProps> = (props) => {
  const { onHide, show, data } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="small-modal"
      //   size="lg"
      centered
    >
      <div className="modal-dialogs">
        <div className="modal-contents">
          <div className="modal-header">
            <div className="h5"> {"Reject Kyc status"}</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <img
                  className="view-content-img"
                  alt={"img" + data}
                  src={data}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <div className="adjust-amount-bttn mt-4"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default KycDetailPopup;
