import TableSkeleton from "../../../components/Skeleton/TableSkeleton";
import React, { FC } from "react";
import { TransactionDetails } from "../../../models/TransactionDetails";
import {
  handleFileDownload,
  numberFormatter,
  PaymentTypeData,
  timeFormat,
} from "../../../utilities/Utillities";

interface TransactionTableProps {
  tableData?: TransactionDetails[];
  loading: boolean;
  // navToEdit: (e: number) => void;
  // clickToDelete: (e: number) => void;
}
const TransactionTable: FC<TransactionTableProps> = (props) => {
  const { tableData, loading } = props;

  console.log(tableData, "tableDatatableDatatableData");
  return (
    <div>
      <div className="table-responsive">
        <table className="table datatable transaction-table">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Name</th>
              <th className="table-th">Beneficiary Name </th>
              <th className="table-th"> Beneficiary Address </th>
              <th className="table-th"> Beneficiary Mobile no </th>
              <th className="table-th"> Relationship </th>
              <th className="table-th"> Mobile Money </th>
              <th className="table-th"> Chippercash </th>
              <th className="table-th"> Country To Transfer </th>
              <th className="table-th"> Account Number </th>
              <th className="table-th"> Bank Code </th>
              <th className="table-th"> Account Type </th>
              <th className="table-th"> Transaction ID </th>
              <th className="table-th"> Amount </th>
              <th className="table-th"> Wallet </th>
              <th className="table-th"> Total Amount </th>
              <th className="table-th"> Commission </th>
              <th className="table-th"> Transferred Currency </th>
              <th className="table-th"> Conversion Rate </th>
              <th className="table-th"> Currency Converted Amount </th>
              <th className="table-th"> Purpose </th>
              <th className="table-th"> Location </th>
              <th className="table-th"> Payment Type </th>
              <th className="table-th"> User Transfer Receipt </th>
              <th className="table-th"> User Payment Status </th>
              <th className="table-th"> Payment Type </th>
              <th className="table-th"> Admin Payment Status </th>
              <th className="table-th"> Auto Payment Status </th>
              <th className="table-th"> Auto Pay </th>
              <th className="table-th"> Rating </th>
              <th className="table-th"> Feedback </th>
              <th className="table-th"> Date </th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={33} />
          ) : (
            <tbody>
              {tableData
                ? tableData?.map((item: TransactionDetails, index: number) => {
                    return (
                      <tr>
                        <td>{item?.transactionUniqueId ?? "-"}</td>
                        <td>{item?.transactionByUser?.name ?? "-"}</td>
                        <td>{item?.beneficiaryName ?? "-"}</td>
                        <td>{item?.beneficiaryAddress ?? "-"}</td>
                        <td>
                          {`${
                            item?.beneficiaryMobileCountryCode
                              ? item?.beneficiaryMobileCountryCode
                              : ""
                          } - ${item?.beneficiaryMobileNumber}` ?? ""}
                        </td>

                        <td>{item?.beneficiaryRelationship ?? "-"}</td>
                        <td>
                          {item?.mobileMoneyCharge
                            ? item?.mobileMoneyCharge
                            : "-"}
                        </td>
                        <td>{item?.chipperCash ? item?.chipperCash : "-"}</td>
                        <td>{item?.countryName ?? "-"}</td>
                        <td>
                          {item?.bankAccountNumber
                            ? item?.bankAccountNumber
                            : "-"}
                        </td>
                        <td>{}</td>
                        <td>
                          {item?.bankAccountType ? item?.bankAccountType : "-"}
                        </td>
                        <td>{}</td>
                        <td>{item?.senderAmount ? item?.senderAmount : "-"}</td>
                        <td>{item?.walletAmount ? item?.walletAmount : "-"}</td>
                        <td>{item?.receiverAmount ?? "-"}</td>
                        <td>{item?.commission ?? "-"}</td>
                        <td>{item?.receiverCurrencyCode ?? "-"}</td>
                        <td>{numberFormatter(item?.currencyRate)}</td>
                        <td>
                          {item?.receiverCurrencyCode ?? "-"}{" "}
                          {numberFormatter(item?.receiverAmount)}
                        </td>
                        <td>{item?.purpose ?? "-"}</td>
                        <td>{}</td>
                        <td>{PaymentTypeData.getTitle(item?.paymentType)}</td>
                        <td>
                          <span
                            className="clr-green"
                            onClick={() =>
                              handleFileDownload(
                                item?.transactionPaymentReceipt?.filePath
                              )
                            }
                          >
                            Download File
                          </span>
                        </td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{timeFormat(item?.updatedAt)}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
