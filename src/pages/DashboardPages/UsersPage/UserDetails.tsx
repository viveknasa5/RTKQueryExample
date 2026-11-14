import { dateFormate } from "../../../utilities/Utillities";
import {
  useChangeUserActiveStatusMutation,
  useLazyGetUserDetailByIdQuery,
} from "../../../Apis/userDetails.Api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useKycStatusUpdateMutation } from "../../../Apis/kycData.Apis";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "@/Apis/types";
import ChangeKycStatus from "../../../components/Modal/ChangeKycStatus";
import SwitchBttn from "../../../components/CommonComponents/Button/SwitchBttn";

interface KycParam {
  id: number;
  status: number;
  // userId: number;
}
const UserDetails = () => {
  const [getUserDetailById, { data: getUserDetails }] =
    useLazyGetUserDetailByIdQuery();
  const { id } = useParams();
  const [KycStatusUpdateMutation] = useKycStatusUpdateMutation();
  const [isReject, setReject] = useState<boolean>(false);
  // useResetKycVerificationMutation;
  useEffect(() => {
    if (id) {
      getUserDetailById({ id: parseInt(id ?? "") });
    }
  }, [id, getUserDetailById]);

  console.log(getUserDetails, "getUserDetailsgetUserDetails");

  // const kycElement = getUserDetails?.Kyc[0];
  // const address = kycElement?.address?.fullAddress
  //   ? kycElement?.address?.fullAddress
  //   : "";

  const kycList = getUserDetails?.Kyc;
  const kycElement = kycList?.slice(-1)[0];

  const address = kycElement?.address?.fullAddress
    ? kycElement?.address?.fullAddress
    : "";

  const acceptAction = (param: KycParam) => {
    confirmAlert({
      // title: "Confirm to Delete",
      message: "Do you want to accipt KYC request of this user?.",

      buttons: [
        {
          label: "Yes",
          onClick: () =>
            KycStatusUpdateMutation(param)
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
  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>User Details</h1>
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
                                  {getUserDetails?.userProfile?.name ?? ""}
                                </span>
                              </div>
                            </div>
                            <div className="Col3">
                              <div className="fieldRow">
                                <label className="fieldLabel">Phone no.</label>
                                <span className="fieldData">
                                  {getUserDetails?.countryCode ?? "-"}{" "}
                                  {getUserDetails?.mobile ?? "-"}
                                </span>
                              </div>
                            </div>
                            <div className="Col3">
                              <div className="fieldRow">
                                <label className="fieldLabel">
                                  Email address
                                </label>
                                <span className="fieldData">
                                  {getUserDetails?.email ?? "-"}
                                </span>
                              </div>
                            </div>
                            {getUserDetails?.id && (
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    Active Status
                                  </label>
                                  <span className="fieldData">
                                    <SwitchBttn
                                      onInputChange={(value) => {
                                        getSwitched(value, getUserDetails?.id);
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

                                  </label> */}
                                <span className="fieldData">{address}</span>
                              </div>
                            </div>
                            {/* <div className="Row mt-4">
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    Street Type
                                  </label>
                                  <span className="fieldData">Avenue</span>
                                </div>
                              </div>
                              <div className="Col2">
                                <div className="fieldRow">
                                  <label className="fieldLabel">
                                    Unit Number
                                  </label>
                                  <span className="fieldData">32432423</span>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {kycElement && (
                      <div className="KYcInfo">
                        <div className="d-flex justify-content-between">
                          <h5 className="smallHEading">Kyc Details</h5>
                          {getUserDetails && (
                            <div className="d-flex gap-3">
                              <span
                                className="clr-green"
                                onClick={() =>
                                  acceptAction({
                                    status: 1,
                                    id: getUserDetails.id,
                                  })
                                }
                              >
                                Accept
                              </span>{" "}
                              <span
                                className="clr-green"
                                onClick={() => setReject(true)}
                              >
                                Reject
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="KYcInfoWrap">
                          <div className="Row">
                            <div className="Col12">
                              <div className="Row">
                                <div className="Col3 rs-colmn">
                                  <div className="fieldRow">
                                    <label className="fieldLabel">
                                      Document Type
                                    </label>
                                    <span className="fieldData">
                                      International Passport
                                    </span>
                                  </div>
                                </div>
                                <div className="Col3 rs-colmn">
                                  <div className="fieldRow">
                                    <label className="fieldLabel">
                                      Document Number
                                    </label>
                                    <span className="fieldData">
                                      {kycElement?.docNumber ?? "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="Col3 rs-colmn">
                                  <div className="fieldRow">
                                    <label className="fieldLabel">
                                      Document Expiry Date
                                    </label>
                                    <span className="fieldData">
                                      {" "}
                                      {dateFormate(kycElement?.docExpiry ?? "")}
                                    </span>
                                  </div>
                                </div>
                                <div className="Col3 rs-colmn">
                                  <div className="fieldRow">
                                    <label className="fieldLabel">
                                      Kyc Status
                                    </label>
                                    <span className="fieldData">
                                      {" "}
                                      {getUserDetails?.kycStatus === 1
                                        ? "Approved"
                                        : "Not Approved"}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="Row mt-4">
                                {kycElement?.frontAttachment && (
                                  <div className="Col3 doc-colmn">
                                    <div className="filePreview">
                                      <img
                                        className="imgfluid"
                                        src={
                                          kycElement?.frontAttachment?.filePath
                                        }
                                        alt="img"
                                      />
                                    </div>
                                  </div>
                                )}
                                {kycElement?.backAttachment && (
                                  <div className="Col3 doc-colmn">
                                    <div className="filePreview">
                                      <img
                                        className="imgfluid"
                                        src={
                                          kycElement?.backAttachment?.filePath
                                        }
                                        alt="img"
                                      />
                                    </div>
                                  </div>
                                )}
                                {kycElement?.cameraAttachment && (
                                  <div className="Col3 doc-colmn">
                                    <div className="filePreview">
                                      <img
                                        className="imgfluid"
                                        src={
                                          kycElement?.cameraAttachment?.filePath
                                        }
                                        alt="img"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

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
            </div>
          </div>
        </section>
      </div>
      {getUserDetails?.id && (
        <ChangeKycStatus
          show={isReject}
          hide={() => {
            setReject(false);
          }}
          userId={getUserDetails.id ?? 0}
        />
      )}
    </>
  );
};

export default UserDetails;
