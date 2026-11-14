import { formateForCurrency } from "../../../../utilities/Utillities";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import Controller from "../../../../components/FormFields/Controller";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import {
  useGetAllCurrencyListQuery,
  useUpDateCurrencyDataMutation,
} from "../../../../Apis/currencyConversion.Apis";
import { useNavigate, useParams } from "react-router-dom";
import { CurrencyConversionSchema } from "../../../../utilities/Schema";
import { IAPICommonErrorResponse } from "@/Apis/types";
import toast from "react-hot-toast";

const EditCurrencyConversion = () => {
  const [rate, setRate] = useState<number>();
  let { id } = useParams();
  const [updateCurrencyDataMudation, { isLoading: loginApiInProgress }] =
    useUpDateCurrencyDataMutation();

  const { data } = useGetAllCurrencyListQuery({
    id: parseInt(id ? id : ""),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const isRate: number = data.data[0].rate;
      setRate(isRate);
    }
  }, [data]);

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formateForCurrency(e.target.value, 10);
    setRate(inputValue);
  };

  const initialValues = {
    rate: rate ?? "",
  };

  const onSubmit = (values: any) => {
    const payload = {
      id: parseInt(id ?? ""),
      rate: values.rate,
    };

    updateCurrencyDataMudation(payload)
      .unwrap()
      .then((response) => {
        console.log(response, "sdglknlsk");
        navigate("/dashboard/currencyconversion");
      })
      .catch((error: IAPICommonErrorResponse) => {
        toast.error(error?.message ?? "");
      });
    console.log(values, "sdksjdfg");
  };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Edit Currency Conversion (AUD - INR)</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">INFO</h5>
                  <div className="nav-tabs-bordered mb-3"> </div>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={CurrencyConversionSchema}
                    enableReinitialize={true}
                  >
                    {(formikProps) => {
                      console.log(formikProps, "lskgdlkwne");
                      return (
                        <Form>
                          <div className="">
                            <Controller
                              control="phone"
                              type="text"
                              label="Mobile Money Charges"
                              name="rate"
                              errors={formikProps?.errors.rate}
                              placeholder="Rate"
                              maxLength={10}
                              value={rate}
                              onInput={handleRateChange}
                            />
                          </div>
                          <div className="text-end mt-3">
                            <FilterSubmitButton
                              bttnText="Submit"
                              loading={loginApiInProgress}
                            />
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditCurrencyConversion;
