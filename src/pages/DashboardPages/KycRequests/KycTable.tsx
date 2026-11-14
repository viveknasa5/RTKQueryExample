import { KycUsers } from "../../../models/KycDetails";
import React, { FC } from "react";
import TableSkeleton from "../../../components/Skeleton/TableSkeleton";
import {
  dateFormate,
  kycStatus,
  timeFormat,
} from "../../../utilities/Utillities";
import { useNavigate } from "react-router-dom";

interface kycTableProps {
  data: KycUsers[];
  updateKycStatus: (param: KycParam) => void;
  loading: boolean;
}
interface KycParam {
  id: number;
  status: number;
  // userId: number;
}

const KycTable: FC<kycTableProps> = (props) => {
  const { data, updateKycStatus = () => {}, loading } = props;

  const navigation = useNavigate();

  const navTo = (id: number) => {
    navigation(`/dashboard/kycrequest/${id}`);
  };

  // console.log(data, "sldkv");
  // const kycList = data?.Kyc;
  //const kycElement = kycList?.slice(-1)[0];

  return (
    <div className="table-responsive transaction-table-height">
      <table className="table datatable table-kyc">
        <thead className="table-thead table-header-fixed">
          <tr className="table-tr">
            <th className="table-th">SR.NO.</th>
            <th className="table-th">NAME</th>
            <th className="table-th">EMAIL</th>
            <th className="table-th">MOBILE NUMBER </th>
            <th className="table-th">Status</th>
            <th className="table-th">Expiry Date </th>
            <th className="table-th">Created At </th>
            {/* <th className="table-th">DATE OF BIRTH </th> */}
          </tr>
        </thead>
        {loading ? (
          <TableSkeleton linesCount={8} coloumnCount={6} />
        ) : (
          <tbody>
            {data
              ? data?.map((item: KycUsers, index: number) => {
                  const expireDate = item.Kyc[item.Kyc.length - 1].docExpiry;
                  const createdAt = item.Kyc[item.Kyc.length - 1].createdAt;
                  console.log(item.Kyc[item.Kyc.length - 1].docExpiry, "sdsld");

                  const status = kycStatus(item?.kycStatus)?.toLowerCase();
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td onClick={() => navTo(item?.id)}>
                        <span className="clr-green">
                          {item?.userProfile?.name ?? "-"}
                        </span>
                      </td>
                      <td>{item?.email ?? "-"}</td>
                      <td>{item?.mobile ?? "-"}</td>
                      <td>
                        <span className={status}>
                          {kycStatus(item?.kycStatus)}
                        </span>
                      </td>
                      <td>{dateFormate(expireDate)}</td>
                      <td>{dateFormate(createdAt)}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default KycTable;
