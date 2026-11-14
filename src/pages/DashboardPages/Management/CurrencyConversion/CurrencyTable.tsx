import { timeFormat } from "../../../../utilities/Utillities";
import { CurrencyExchangeRate } from "../../../../models/CurrencyConversion";
import React, { FC } from "react";
import IconButton from "../../../../components/CommonComponents/Button/IconButton";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";

interface CurrencListProps {
  currencyList?: CurrencyExchangeRate[];
  loading: boolean;
}
const CurrencyTable: FC<CurrencListProps> = (props) => {
  const navigation = useNavigate();
  const { currencyList, loading } = props;

  const navToEdit = (id: number) => {
    navigation(`/dashboard/currencyconversion/edit/${id}`);
  };
  return (
    <div>
      <div className="table-responsive">
        <table className="table datatable table-currency">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Currency Form </th>
              <th className="table-th">Currency To </th>
              <th className="table-th">Rate</th>
              <th className="table-th">Last Updated </th>
              <th className="table-th">Action</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={6} />
          ) : (
            <tbody>
              {currencyList?.length
                ? currencyList?.map(
                    (currency: CurrencyExchangeRate, index: number) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{currency?.currencyFrom ?? "-"}</td>
                          <td>{currency?.currencyTo ?? "-"}</td>
                          <td>{currency?.rate ?? "-"}</td>
                          <td>{timeFormat(currency?.updatedAt) ?? "-"}</td>
                          <td>
                            <div className="">
                              <IconButton
                                onBttnClick={() => navToEdit(currency?.id)}
                                bttnAction="Edit"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )
                : ""}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CurrencyTable;
