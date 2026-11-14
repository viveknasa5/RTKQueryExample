import { useNavigate } from "react-router-dom";
import CommonButton from "../../../../components/CommonComponents/Button/CommonButton";
import React, { useEffect, useState } from "react";
import TemplateTable from "./TemplateTable";
import {
  useDeleteEmailTemplateMutation,
  useGetAllEmailTemplateListQuery,
  useLazyGetAllEmailTemplateListQuery,
} from "../../../../Apis/emailTemplate.Apis";
import { EmailTemplateProps } from "../../../../models/EmailTemplate";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { IAPICommonErrorResponse } from "@/Apis/types";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const EmailTemplate = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");

  const { data, isLoading } = useGetAllEmailTemplateListQuery({});
  const [getEmailTemplate] = useLazyGetAllEmailTemplateListQuery({});
  const [templateList, setTemplateList] = useState<EmailTemplateProps[]>();
  const [deleteEmailTemplateMutation] = useDeleteEmailTemplateMutation();
  // const [getAllUser, { data, isLoading, error }] = useLazyGetAllUserQuery({});

  console.log(data, "datadata");
  const navToEdit = (id: number) => {
    navigate(`/dashboard/email-templates/edit/${id}`);
  };
  const navTo = () => {
    navigate(`/dashboard/email-templates/add`);
  };

  const deleteRecord = (id: number) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete role.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteEmailTemplateMutation({ id })
              .unwrap()
              .then((response) => {
                console.log(response, "sdlgnslkdn");
                getEmailTemplate({});
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

  //for pagination
  useEffect(() => {
    getEmailTemplate({
      page: activePage,
    });
  }, [activePage, getEmailTemplate]);

  useEffect(() => {
    setTemplateList(data?.data);
    getEmailTemplate({});
  }, [data, getEmailTemplate]);
  return (
    <>
      <div>
        <div className="main breadCrumb-main-div pb-0">
          <div className="d-flex justify-content-between mb-3 mt-2">
            <div className="pagetitle">
              <h1>Email Template</h1>
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
                <TemplateTable
                  tableData={templateList}
                  loading={isLoading}
                  navToEdit={(e: number) => {
                    navToEdit(e);
                  }}
                  clickToDelete={(e: number) => {
                    deleteRecord(e);
                  }}
                />
              </div>
            </div>
            {templateList?.length && (
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
    </>
  );
};

export default EmailTemplate;
