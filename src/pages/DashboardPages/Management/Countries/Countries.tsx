import React, { useEffect, useState } from "react";
import CountriesTable from "./CountriesTable";
import {
  useDeleteCurrencyRecordByIdMutation,
  useGetAllCountryCurrencyListQuery,
  useLazyGetAllCountryCurrencyListQuery,
} from "../../../../Apis/countryCurrency.Apis";
import { useNavigate } from "react-router-dom";
import { CountryConversionList } from "../../../../models/CurrencyConversion";
import toast from "react-hot-toast";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const Countries = () => {
  const { data, isLoading } = useGetAllCountryCurrencyListQuery({});
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");

  const [deleteCurrencyRecordByIdMutation] =
    useDeleteCurrencyRecordByIdMutation();

  const [getCurrencyConversionList, setCurrencyConversionList] =
    useState<CountryConversionList[]>();

  const [getAllUser] = useLazyGetAllCountryCurrencyListQuery({});

  const navigate = useNavigate();

  useEffect(() => {
    setCurrencyConversionList(data?.data);
  }, [data]);

  console.log(data, "datadata");
  const navTo = () => {
    navigate(`/dashboard/managecountrycurrency/add`);
  };
  const navToEdit = (id: number) => {
    navigate(`/dashboard/managecountrycurrency/edit/${id}`);
  };

  const deleteRecordById = (id: number) => {
    deleteCurrencyRecordByIdMutation({ id })
      .unwrap()
      .then((response) => {
        console.log(response, "lksdglk");
        toast.success(response?.message!);
        getAllUser({});
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  useEffect(() => {
    getAllUser({
      page: activePage,
    });
  }, [activePage, getAllUser]);

  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="d-flex justify-content-between mb-3 mt-2">
          <div className="pagetitle">
            <h1>Currency Conversion</h1>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              navTo();
            }}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <CountriesTable
                    dataList={getCurrencyConversionList}
                    loading={isLoading}
                    navToEdit={(id: number) => navToEdit(id)}
                    deleteRecordById={(id: number) => deleteRecordById(id)}
                  />
                </div>
              </div>
              {getCurrencyConversionList?.length && (
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
    </div>
  );
};

export default Countries;
