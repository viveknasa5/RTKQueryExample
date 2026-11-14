import {
  dateFormate,
  kycStatus,
  timeFormat,
} from "../../../utilities/Utillities";
import { UserDetail } from "../../../models/UserDetails";
import React, { FC } from "react";
import SwitchBttn from "../../../components/CommonComponents/Button/SwitchBttn";
import { useChangeUserActiveStatusMutation } from "../../../Apis/userDetails.Api";
import { IAPICommonErrorResponse } from "@/Apis/types";
import toast from "react-hot-toast";
import TableSkeleton from "../../../components/Skeleton/TableSkeleton";
import { useNavigate } from "react-router-dom";

interface TableProps {
  data?: UserDetail[];
  loading?: boolean;
  ChangeEmail?: (e: UserDetail) => void;
  ChangeMobile?: (e: UserDetail) => void;
}

const UsersTable: FC<TableProps> = (props) => {
  const {
    data,
    loading,
    ChangeEmail = () => {},
    ChangeMobile = () => {},
  } = props;
  const [changeUserActiveStatusMutaion] = useChangeUserActiveStatusMutation();
  const navigate = useNavigate();
  const getSwitched = (value: boolean, id: number) => {
    const payload = {
      userId: id,
      status: value ? 1 : 0,
    };
    changeUserActiveStatusMutaion(payload)
      .unwrap()
      .then((response) => {
        // console.log(response, "sdkgsdlkg");
        toast.success(response.message ?? "");
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
  };

  const navTo = (id: number) => {
    navigate(`/dashboard/users/${id}`);
  };
  console.log(data, "232323232323");
  return (
    <div className="table-responsive user-tbl-h ">
      <table className="table datatable table-main">
        <thead className="table-thead table-header-fixed">
          <tr className="table-tr">
            <th className="table-th">SR.NO.</th>
            <th className="table-th">NAME</th>
            <th className="table-th">EMAIL</th>
            <th className="table-th">CONTACT NO. </th>
            <th className="table-th">KYC STATUS </th>
            <th className="table-th">STATE</th>
            <th className="table-th">Acton</th>
          </tr>
        </thead>
        {loading ? (
          <TableSkeleton linesCount={8} coloumnCount={20} action={true} />
        ) : (
          <tbody>
            {data ? (
              <>
                {data?.map((item: UserDetail, index: number) => {
                  console.log(item, "sdkgnsdlnglksn");
                  // const sno = index + 1 + (currentPage - 1) * 20;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <span
                          className="clr-green"
                          onClick={() => {
                            navTo(item?.id);
                          }}
                        >
                          {item?.userProfile?.name}
                        </span>
                      </td>
                      <td>
                        <span
                          className="clr-green"
                          onClick={() => ChangeEmail(item)}
                        >
                          {item?.email}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span
                          className="clr-green "
                          onClick={() => ChangeMobile(item)}
                        >
                          {item?.mobile}
                        </span>
                      </td>
                      <td>{kycStatus(item?.kycStatus)}</td>
                      <td>
                        <SwitchBttn
                          onInputChange={(value) => {
                            getSwitched(value, item?.id);
                          }}
                        />
                      </td>
                      <td>-</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UsersTable;
