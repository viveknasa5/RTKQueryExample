import { useNavigate } from "react-router-dom";
import CommonButton from "../../../../components/CommonComponents/Button/CommonButton";
import React, { useEffect, useState } from "react";
import {
  useDeleteFaqMutation,
  useGetFaqListingQuery,
  useLazyGetFaqListingQuery,
} from "../../../../Apis/faq.Apis";
import { FAQItem } from "../../../../models/FaqDetails";
import FaqTable from "./FaqTable";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "../../../../Apis/types";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const FaqComponent = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");
  const { data, isLoading } = useGetFaqListingQuery({});
  const [faqListingData, setFaqListingData] = useState<FAQItem[]>();
  const [getAllFaqs] = useLazyGetFaqListingQuery({});
  const [deleteFaqMutation] = useDeleteFaqMutation();
  const navigate = useNavigate();

  console.log(data, "datadata");
  const navTo = () => {
    navigate("/dashboard/managefaq/add");
  };

  const navToEdit = (id: number) => {
    navigate(`/dashboard/managefaq/edit/${id}`);
  };

  const deleteRecord = (id: number) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete role.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteFaqMutation({ id })
              .unwrap()
              .then((response) => {
                console.log(response, "sdlgnslkdn");
                getAllFaqs({});
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
    setFaqListingData(data?.data);
    getAllFaqs({});
  }, [data, getAllFaqs]);

  useEffect(() => {
    getAllFaqs({
      page: activePage,
    });
  }, [activePage, getAllFaqs]);
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>FAQ</h1>
          </div>
          <CommonButton
            buttonType={"button"}
            bttnText="Add New"
            onClickBttn={() => navTo()}
          />
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="card">
            <div className="card-body">
              <FaqTable
                faqTableData={faqListingData}
                loading={isLoading}
                clickToDelete={(e: number) => {
                  deleteRecord(e);
                }}
                navToEdit={(e) => {
                  navToEdit(e);
                }}
              />
            </div>
          </div>
          {faqListingData?.length && (
            <PaginationComponent
              activePage={activePage}
              allItems={data as any}
              limit={data?.perPage ?? 20}
              setActivePage={setActivePage}
              setLimit={setLimit}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default FaqComponent;
