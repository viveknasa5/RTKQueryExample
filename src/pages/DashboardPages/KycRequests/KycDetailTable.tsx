import { kyc } from "@/models/KycDetails";
import TableSkeleton from "../../../components/Skeleton/TableSkeleton";
import React, { FC, useState } from "react";
import {
  dateFormate,
  documentOptions,
  kycStatus,
} from "../../../utilities/Utillities";
import KycDetailPopup from "../../../components/Modal/KycDetailPopup";
import ResetKyc from "@/components/Modal/ResetKyc";

interface kycTableProps {
  data: kyc[];
  updateKycStatus: (param: KycParam) => void;
  loading: boolean;
}

interface KycParam {
  id: number;
  status: number;
  // userId: number;
}
const KycDetailTable: FC<kycTableProps> = (props) => {
  const [kycDocData, setKycDocData] = useState<string>();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const { data, loading, updateKycStatus = () => {} } = props;
  // const [isResetKyc, setResetKyc] = useState<boolean>(false);

  const lastKycData = data[data?.length - 1];
  console.log(data, "dsgwegwegwe");
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5 className="smallHEading">Kyc Details</h5>

        <div className="">
          <span
            className="pointer clr-green  "
            onClick={() => {
              updateKycStatus({
                status: 5,
                id: lastKycData?.id,
              });
            }}
          >
            Reset Kyc
          </span>
        </div>
      </div>
      <div className="KYcInfoWrap">
        <div className="table-responsive category-tbl-height ">
          <table className="table datatable table-kyc-detail">
            <thead className="table-thead table-header-fixed">
              <tr className="table-tr">
                <th className="table-th">Sr.No.</th>
                <th className="table-th"> Status</th>
                <th className="table-th "> Action</th>
                <th className="table-th">Name</th>
                <th className="table-th"> Document Type</th>
                <th className="table-th"> Document Number</th>
                <th className="table-th"> Document Expiry Date</th>
                <th className="table-th"> Created At</th>
                <th className="table-th"> Camera Photo</th>
                <th className="table-th"> Front Attachment</th>
                <th className="table-th"> Back Attachment</th>
              </tr>
            </thead>
            {loading ? (
              <TableSkeleton linesCount={8} coloumnCount={13} />
            ) : (
              <tbody>
                {(data?.length ?? 0) > 0
                  ? data?.map((item: kyc, index: number) => {
                      const matchingOption = documentOptions.find(
                        (option) => option.value === item?.docType
                      );
                      const docType = matchingOption
                        ? matchingOption.label
                        : null;

                      const status = kycStatus(item?.status)?.toLowerCase();
                      console.log(status, "kkkkkkkkkkkkk");
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <span className={status?.toLowerCase()}>
                              {kycStatus(item?.status)}
                            </span>
                          </td>
                          {item?.status === 2 ? (
                            <td className="">
                              <div className="d-flex gap-2 ">
                                <span
                                  className="pointer clr-green  "
                                  onClick={() => {
                                    updateKycStatus({
                                      status: 1,
                                      id: item.id,
                                    });
                                  }}
                                >
                                  Accept
                                </span>
                                <div className="">|</div>
                                <span
                                  className="pointer clr-green  "
                                  onClick={() => {
                                    updateKycStatus({
                                      status: 4,
                                      id: item.id,
                                    });
                                  }}
                                >
                                  Reject
                                </span>
                              </div>
                            </td>
                          ) : (
                            <td className="text-center">-</td>
                          )}
                          <td>
                            {item?.firstName} {item?.lastName ?? ""}
                          </td>
                          <td>{docType}</td>
                          <td>{item?.docNumber ?? "-"}</td>
                          <td>{dateFormate(item?.docExpiry)}</td>
                          <td>{dateFormate(item?.createdAt)}</td>
                          <td>
                            <div className="">
                              <img
                                onClick={() => {
                                  setKycDocData(
                                    item?.cameraAttachment?.filePath ||
                                      "/assets/images/dummy-profile.webp"
                                  );
                                  setShowPopup(true);
                                }}
                                alt={"kycImg" + index}
                                className="kyc-tbl-img"
                                src={
                                  item?.cameraAttachment?.filePath ||
                                  "/assets/images/dummy-profile.webp"
                                }
                              />
                            </div>
                          </td>
                          <td>
                            {
                              <div className="">
                                <img
                                  onClick={() => {
                                    setKycDocData(
                                      item?.frontAttachment?.filePath ||
                                        "/assets/images/dummy-profile.webp"
                                    );
                                    setShowPopup(true);
                                  }}
                                  alt={"kycImg" + index}
                                  className="kyc-tbl-img"
                                  src={
                                    item?.frontAttachment?.filePath ||
                                    "/assets/images/dummy-profile.webp"
                                  }
                                />
                              </div>
                            }
                          </td>
                          <td>
                            {" "}
                            {
                              <div className="">
                                <img
                                  onClick={() => {
                                    setKycDocData(
                                      item?.backAttachment?.filePath
                                        ? item?.backAttachment?.filePath
                                        : "/assets/images/dummy-profile.webp"
                                    );
                                    setShowPopup(true);
                                  }}
                                  alt={"kycImg" + index}
                                  className="kyc-tbl-img"
                                  src={
                                    item?.backAttachment
                                      ? item?.backAttachment?.filePath
                                      : "/assets/images/dummy-profile.webp"
                                  }
                                />
                              </div>
                            }
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <KycDetailPopup
        onHide={() => setShowPopup(false)}
        show={showPopup}
        data={kycDocData}
      />
      {/* <ResetKyc show={isResetKyc} userId={} hide={() => setResetKyc(false)} /> */}
    </div>
  );
};

export default KycDetailTable;
