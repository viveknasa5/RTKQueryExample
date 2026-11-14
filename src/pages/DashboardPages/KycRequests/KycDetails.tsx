import { kyc } from "@/models/KycDetails";
import {
  useKycStatusUpdateMutation,
  useLazyGetKycDetailsByIdQuery,
} from "../../../Apis/kycData.Apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dateFormate, documentOptions } from "../../../utilities/Utillities";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "@/Apis/types";
import ChangeKycStatus from "../../../components/Modal/ChangeKycStatus";
import KycDetailTable from "./KycDetailTable";
import ResetKyc from "../../../components/Modal/ResetKyc";
import SwitchBttn from "../../../components/CommonComponents/Button/SwitchBttn";
import { useChangeUserActiveStatusMutation } from "../../../Apis/userDetails.Api";

interface KycParam {
  id: number;
  status: number;
  // userId: number;
}
const KycDetails = () => {
  const { id } = useParams();
  const [getKycDetailById, { data: kycDetailsById, isLoading }] =
    useLazyGetKycDetailsByIdQuery();
  const [isReject, setReject] = useState<boolean>(false);
  const [kycId, setKycId] = useState<number>();
  const [isResetKyc, setResetKyc] = useState<boolean>(false);
  const [KycStatusUpdateMutation] = useKycStatusUpdateMutation();
  useEffect(() => {
    if (id) {
      getKycDetailById({ id: parseInt(id ?? "") });
    }
  }, [id, getKycDetailById]);

  const acceptAction = (status: number) => {
    const payload = {
      status: status,
      id: kycId,
    };
    confirmAlert({
      // title: "Confirm to Delete",
      message: "Do you want to accipt KYC request of this user?.",

      buttons: [
        {
          label: "Yes",
          onClick: () =>
            KycStatusUpdateMutation(payload)
              .unwrap()
              .then((response) => {
                console.log(response, "sdlgnslkdn");
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
  const [changeUserActiveStatusMutaion] = useChangeUserActiveStatusMutation();

  const getSwitched = (value: boolean, id: number) => {
    const payload = {
      userId: id,
      status: value ? 1 : 0,
    };
    changeUserActiveStatusMutaion(payload)
      .unwrap()
      .then((response) => {
        console.log(response, "sdkgsdlkg");
        // toast.success(response?.message);
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
  };

  const kycList = kycDetailsById?.Kyc;
  const totalKycDoc = kycDetailsById?.Kyc
    ? kycDetailsById?.Kyc?.length - 1
    : "";
  const kycElement = kycList?.slice(-1)[0];

  const address = kycElement?.address?.fullAddress
    ? kycElement?.address?.fullAddress
    : "";

  // console.log(kycDetailsById, "=======");

  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Kyc Details</h1>
          </div>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <div className="onboardingScreeens">
                <div className="wrapper">
                  <div className="wrapperInner">
                    {/* <div className="headingOuter">
                      <div className="headRow">
                        <div className="dbHeadingGgrp">
                          <h4 className="dbHeadingGgrp">
                            <a href="#">
                              <img
                                className="backImg"
                                src="/assets/images/ep_back.svg"
                                alt="img"
                              />
                            </a>
                            KYC details
                          </h4>
                        </div>
                      </div>
                    </div> */}

                    <div className="profileCardIn">
                      <div className="Row">
                        <div className="Col12">
                          <div className="Row align-center headRow">
                            <div className="Col2">
                              <div className="profileFigure">
                                <img
                                  className="profile-img"
                                  src="/assets/images/profile-img.png"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="Col2">
                              <div className="fieldRow">
                                <label className="fieldLabel">Name</label>
                                <span className="fieldData">
                                  {kycDetailsById?.userProfile?.name ?? ""}
                                </span>
                              </div>
                            </div>
                            <div className="Col2">
                              <div className="fieldRow">
                                <label className="fieldLabel">Phone no.</label>
                                <span className="fieldData">
                                  {kycDetailsById?.countryCode ?? "-"}{" "}
                                  {kycDetailsById?.mobile ?? "-"}
                                </span>
                              </div>
                            </div>
                            <div className="Col3">
                              <div className="fieldRow">
                                <label className="fieldLabel">
                                  Email address
                                </label>
                                <span className="fieldData">
                                  {kycDetailsById?.email ?? "-"}
                                </span>
                              </div>
                            </div>
                            {kycDetailsById?.id && (
                              <div className="Col3">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    Active Status
                                  </label>
                                  <span className="fieldData">
                                    <SwitchBttn
                                      onInputChange={(value) => {
                                        getSwitched(value, kycDetailsById?.id);
                                      }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* <div className="Col3 colProgress">
                          <div className="Row">
                            <div className="Col12">
                              <div className="textRight colWrapMd">
                                <label className="statusGreen">
                                  In Progress
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="KYcInfo">
                      <h5 className="smallHEading">Personal Information</h5>
                      <div className="KYcInfoWrap">
                        <div className="Row">
                          <div className="Col12">
                            <div className="Row">
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    First Name
                                  </label>
                                  <span className="fieldData">
                                    {kycElement?.firstName ?? ""}
                                  </span>
                                </div>
                              </div>
                              {kycElement?.middleName && (
                                <div className="Col2">
                                  <div className="fieldRow">
                                    <label className="fieldLabel">
                                      Middle Name
                                    </label>
                                    <span className="fieldData">
                                      {kycElement?.middleName ?? ""}
                                    </span>
                                  </div>
                                </div>
                              )}
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    Last Name
                                  </label>
                                  <span className="fieldData">
                                    {" "}
                                    {kycElement?.lastName ?? ""}
                                  </span>
                                </div>
                              </div>
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">DOB</label>
                                  <span className="fieldData">
                                    {dateFormate(kycElement?.dob ?? "")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="KYcInfo">
                      <h5 className="smallHEading">Address Detail</h5>
                      <div className="KYcInfoWrap">
                        <div className="Row">
                          <div className="Col12">
                            <div className="Row">
                              <div className="fieldRow">
                                {/* <label className="fieldLabel">
                                  Postal Code
                                </label> */}
                                <span className="fieldData">{address}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="KYcInfo">
                      <KycDetailTable
                        data={kycDetailsById?.Kyc ?? []}
                        loading={isLoading}
                        updateKycStatus={(e: KycParam) => {
                          console.log(e, "sgdlns");
                          if (e.status === 4) {
                            setReject(true);
                            setKycId(e.id);
                          } else if (e.status === 5) {
                            setKycId(e.id);
                            setResetKyc(true);
                          } else {
                            acceptAction(e.status);
                            setKycId(e.id);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="KYcInfo">
                      <h5 className="smallHEading">User Image Verification</h5>
                      <div className="Row">
                        <div className="Col3">
                          <div className="filePreview">
                            <img
                              className="imgfluid"
                              src="/assets/images/UserVerification.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {
        <ChangeKycStatus
          show={isReject}
          hide={() => {
            setReject(false);
          }}
          userId={kycId ?? 0}
        />
      }
      {
        <ResetKyc
          show={isResetKyc}
          hide={() => {
            setResetKyc(false);
          }}
          userId={kycId ?? 0}
        />
      }
    </>
  );
};

export default KycDetails;
