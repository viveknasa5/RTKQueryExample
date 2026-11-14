import { useNavigate } from "react-router-dom";
import CommonButton from "../../../../components/CommonComponents/Button/CommonButton";
import React from "react";
import StaffTable from "./StaffTable";

const Staff = () => {
  const navigate = useNavigate();

  const navTo = () => {
    navigate("/dashboard/staff/add");
  };

  // const navToEdit = (id: number) => {
  //   navigate(`/dashboard/staff/edit/${id}`);
  // };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Staff</h1>
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
              <StaffTable />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
