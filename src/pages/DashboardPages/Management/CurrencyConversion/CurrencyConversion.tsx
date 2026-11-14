import React, { useEffect, useState } from "react";
import CurrencyTable from "./CurrencyTable";
import {
  useGetAllCurrencyListQuery,
  useLazyGetAllCurrencyListQuery,
} from "../../../../Apis/currencyConversion.Apis";
import { CurrencyExchangeRate } from "../../../../models/CurrencyConversion";
import { IAPICommonError } from "@/Apis/types";
import toast from "react-hot-toast";
import PaginationComponent from "../../../../components/CommonComponents/PaginationComponent";

const CurrencyConversion = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  console.log(limit, "limit");

  const { data, isLoading, error } = useGetAllCurrencyListQuery({});
  const [getAllCurrencyList] = useLazyGetAllCurrencyListQuery({});
  const [currencyList, setCurrencyList] = useState<CurrencyExchangeRate[]>();

  useEffect(() => {
    setCurrencyList(data?.data);
  }, [data]);

  useEffect(() => {
    if ((error as IAPICommonError)?.message) {
      toast.error((error as IAPICommonError)?.message ?? "");
    }
  }, [error]);

  useEffect(() => {
    getAllCurrencyList({
      page: activePage,
    });
  }, [activePage, getAllCurrencyList]);

  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Currency Conversion</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <CurrencyTable
                    currencyList={currencyList}
                    loading={isLoading}
                  />
                </div>
              </div>
              {currencyList?.length && (
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

export default CurrencyConversion;
