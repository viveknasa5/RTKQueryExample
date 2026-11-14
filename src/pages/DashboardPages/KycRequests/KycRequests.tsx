import {
  useKycStatusUpdateMutation,
  useLazyGetAllKycDoucmentsQuery,
} from "../../../Apis/kycData.Apis";
import React, { useEffect, useState } from "react";
import KycTable from "./KycTable";
import { KycUsers } from "../../../models/KycDetails";
import toast from "react-hot-toast";
import { IAPICommonError, IAPICommonErrorResponse } from "@/Apis/types";
import { confirmAlert } from "react-confirm-alert";
import PaginationComponent from "../../../components/CommonComponents/PaginationComponent";
import ChangeKycStatus from "../../../components/Modal/ChangeKycStatus";

interface KycParam {
  id: number;
  status: number;
  // userId: number;
}

const KycRequests = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  const [isUserId, setUserId] = useState<number>();
  console.log(limit, "limit");
  const [isReject, setReject] = useState<boolean>(false);
  const [getAllKycData, { data, error, isLoading }] =
    useLazyGetAllKycDoucmentsQuery({});

  console.log(data, "datadatadatadata");
  const [getKycListing, setKycListing] = useState<KycUsers[]>([]);

  const [KycStatusUpdateMutation] = useKycStatusUpdateMutation();

  useEffect(() => {
    if (data && data.data) {
      console.log(data, "aaaaaaaaa");
      setKycListing(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if ((error as IAPICommonError)?.message) {
      toast.error((error as IAPICommonError)?.message ?? "");
    }
  }, [error]);

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

  useEffect(() => {
    getAllKycData({
      page: activePage,
    });
  }, [activePage, getAllKycData]);

  return (
    <>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>KYC request</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body pt-0">
                  <KycTable
                    data={getKycListing}
                    updateKycStatus={(param: KycParam) => {
                      if (param?.status === 4) {
                        setReject(true);
                        setUserId(param?.id);
                      } else {
                        acceptAction(param);
                      }
                    }}
                    loading={isLoading}
                  />
                </div>
              </div>
              {getKycListing?.length && (
                <PaginationComponent
                  activePage={activePage}
                  allItems={data as any}
                  limit={data?.perPage ?? 20}
                  setActivePage={setActivePage}
                  setLimit={setLimit}
                />
              )}
            </div>
          </div>
        </section>
      </div>
      <ChangeKycStatus
        show={isReject}
        hide={() => {
          setReject(false);
        }}
        userId={isUserId ?? 0}
      />
    </>
  );
};

export default KycRequests;
