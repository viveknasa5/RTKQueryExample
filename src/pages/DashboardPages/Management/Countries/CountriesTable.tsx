import React, { FC } from "react";
import { CountryConversionList } from "../../../../models/CurrencyConversion";
import IconButton from "../../../../components/CommonComponents/Button/IconButton";
import TableSkeleton from "../../../../components/Skeleton/TableSkeleton";

interface CountriesTableProps {
  dataList?: CountryConversionList[];
  loading?: boolean;
  navToEdit?: (id: number) => void;
  deleteRecordById?: (id: number) => void;
}
const CountriesTable: FC<CountriesTableProps> = (props) => {
  const {
    dataList,
    loading,
    navToEdit = () => {},
    deleteRecordById = () => {},
  } = props;
  return (
    <div>
      <div className="table-responsive">
        <table className="table datatable table-currency">
          <thead className="table-thead table-header-fixed">
            <tr className="table-tr">
              <th className="table-th">Sr.No.</th>
              <th className="table-th">Country </th>
              <th className="table-th">Currency/Currency Addon</th>
              <th className="table-th"> Chippercash</th>
              <th className="table-th">Mobile Money </th>
              <th className="table-th">Bank Transfer </th>
              <th className="table-th">Action </th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton linesCount={8} coloumnCount={20} action={true} />
          ) : (
            <tbody>
              {dataList?.map((item: CountryConversionList, index: number) => {
                console.log(item, "itemitemitemitem");

                const formattedData = item?.currencyAddonSettings?.map(
                  (item) => {
                    const actionTypeStr =
                      item.actionType === 1 ? "Subtract" : "Add";
                    return ` ${item.currency}: ${item.currencyAddon}% - ${actionTypeStr} ,`;
                  }
                );
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.countryName}</td>
                    <td>{formattedData}</td>
                    <td>{item?.isChipperCash ? "Active " : "Not Active"}</td>
                    <td>{item?.isMoneyBack ? "Active " : "Not Active"}</td>
                    <td>{item?.isBankTransfer ? "Active " : "Not Active"}</td>

                    <td>
                      <div className="d-flex gap-3">
                        <div className="">
                          <IconButton
                            onBttnClick={() => navToEdit(item?.countryId)}
                            bttnAction="Edit"
                          />
                        </div>
                        <div className="">
                          <IconButton
                            onBttnClick={() =>
                              deleteRecordById(item?.countryId)
                            }
                            bttnAction="Delete"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CountriesTable;
