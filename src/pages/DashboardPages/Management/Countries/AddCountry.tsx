import {
  useAddCountryCurrencyChargesMutation,
  useGetAllConstantsListQuery,
  useGetAllCountryListQuery,
  useGetCountryCurrencyDetailsByIdQuery,
  useUpdateCountryCurrencyChargesMutation,
} from "../../../../Apis/countryCurrency.Apis";
import Controller from "../../../../components/FormFields/Controller";
import { Formik, Form, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import FilterSubmitButton from "../../../../components/CommonComponents/Button/FilterSubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import { CountryConversionList } from "../../../../models/CurrencyConversion";
import { CountryCurrencySchema } from "../../../../utilities/Schema";

const AddCountry = () => {
  const { data } = useGetAllCountryListQuery({});
  let { id } = useParams();
  const navigate = useNavigate();

  const [getCountryData, setCountryData] = useState<CountryConversionList>();

  const [addCountryCurrencyChargesMutation, { isLoading: addApiInProgress }] =
    useAddCountryCurrencyChargesMutation({});

  const [
    updateCountryCurrencyChargesMutation,
    { isLoading: updateApiInProcess },
  ] = useUpdateCountryCurrencyChargesMutation();

  const { data: dataById } = useGetCountryCurrencyDetailsByIdQuery({
    id: parseInt(id ? id : ""),
  });

  console.log(dataById, "dataByIddataById");

  const { data: getAllData } = useGetAllConstantsListQuery({});

  const [constantData, setConstantData] = useState<any>();

  useEffect(() => {
    setConstantData(getAllData?.money_transfer_to_currency);
  }, [getAllData]);

  useEffect(() => {
    if (dataById) {
      setCountryData(dataById);
    }
  }, [dataById]);

  console.log(getCountryData, "isBankTransferisBankTransfer");
  const initialValues = {
    countryId: getCountryData?.countryId ?? "",
    isChipperCash: getCountryData?.isChipperCash ?? false,
    isMoneyBack: getCountryData?.isMoneyBack ?? false,
    isBankTransfer: getCountryData?.isBankTransfer ?? false,
    currencyAddonSettings: getCountryData?.currencyAddonSettings ?? [
      {
        currency: "",
        currencyAddon: "",
        actionType: "",
      },
    ],
  };

  const onSubmit = (values: any) => {
    console.log(values, "sdglwneglnwl");

    const payload = {
      countryId: values?.countryId,
      isChipperCash: values?.isChipperCash,
      isMoneyBack: values?.isMoneyBack,
      isBankTransfer: values?.isBankTransfer,
      currencyAddonSettings: values?.currencyAddonSettings,
    };
    if (id) {
      updateCountryCurrencyChargesMutation(payload)
        .unwrap()
        .then((response) => {
          console.log(response);
          navigate("/dashboard/managecountrycurrency");
        })
        .catch((err) => {
          console.log(err, "Sdglkn");
        });
    } else {
      addCountryCurrencyChargesMutation(payload)
        .unwrap()
        .then((response) => {
          console.log(response?.data);
          navigate("/dashboard/managecountrycurrency");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div className="main breadCrumb-main-div pb-0">
        <div className="pagetitle">
          <h1>Add Country</h1>
        </div>
      </div>
      <div className="main breadCrumb-main-div mt-0 pt-0">
        <section className="section">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Manage country, Country's currency addon along with setting
                    of Chaippercash availability
                  </h5>
                  <div className="nav-tabs-bordered mb-3"> </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={id ? true : false}
                    validationSchema={CountryCurrencySchema}
                  >
                    {(formikProps) => {
                      console.log(formikProps.values, "sdnlgs");
                      return (
                        <Form>
                          <div className="">
                            <Controller
                              control="select"
                              type="text"
                              label="Select Country"
                              name="countryId"
                              errors={formikProps?.errors}
                              placeholder="Select country"
                              options={data?.map((country: any) => ({
                                value: country.id,
                                label: country.country,
                              }))}
                            />
                          </div>

                          <FieldArray name="currencyAddonSettings">
                            {({ insert, remove, push }) => {
                              console.log(formikProps.values, "Package");

                              return (
                                <>
                                  {formikProps.values.currencyAddonSettings.map(
                                    (item: any, index: number) => {
                                      return (
                                        <div className="row" key={index}>
                                          <div className="col-md-3">
                                            <Controller
                                              control="select"
                                              type="text"
                                              label="Currency"
                                              name={`currencyAddonSettings.${index}.currency`}
                                              errors={formikProps?.errors}
                                              placeholder="Select Country"
                                              options={constantData?.map(
                                                (currency: any) => ({
                                                  value: currency.value,
                                                  label: currency.label,
                                                })
                                              )}
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <Controller
                                              control="phone"
                                              type="text"
                                              label="Currency addon(%)"
                                              name={`currencyAddonSettings.${index}.currencyAddon`}
                                              errors={formikProps?.errors}
                                              placeholder="Eg. 30"
                                              maxLength={10}
                                              fieldType="currency"
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <Controller
                                              control="select"
                                              type="text"
                                              label="Action"
                                              name={`currencyAddonSettings.${index}.actionType`}
                                              errors={formikProps?.errors}
                                              placeholder="Select Type"
                                              options={[
                                                { value: 1, label: "Add" },
                                                { value: 2, label: "Subtract" },
                                              ]}
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <div className="mt-30">
                                              {formikProps.values
                                                .currencyAddonSettings
                                                .length === 1 ? (
                                                ""
                                              ) : (
                                                <span
                                                  className="pointer"
                                                  onClick={() =>
                                                    formikProps.values
                                                      .currencyAddonSettings
                                                      .length > 1 &&
                                                    remove(index)
                                                  }
                                                >
                                                  <img
                                                    alt=""
                                                    src={
                                                      "/assets/images/delete.svg"
                                                    }
                                                  />
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                  <div className="">
                                    <span
                                      onClick={() =>
                                        push({
                                          currency: "",
                                          currencyAddon: "",
                                          actionType: 1,
                                        })
                                      }
                                    >
                                      + Add Item
                                    </span>
                                  </div>
                                </>
                              );
                            }}
                          </FieldArray>
                          <div className="row mt-3">
                            <div className="col-md-4">
                              <Controller
                                control="checkbox"
                                type="text"
                                label="Is Chippercash available?"
                                name="isChipperCash"
                                errors={formikProps?.errors}
                              />
                            </div>
                            <div className="col-md-4">
                              <Controller
                                control="checkbox"
                                type="text"
                                label="Is Mobile money available?"
                                name="isMoneyBack"
                                errors={formikProps?.errors}
                              />
                            </div>
                            <div className="col-md-4">
                              <Controller
                                control="checkbox"
                                type="text"
                                label="Is Bank transfer available?"
                                name="isBankTransfer"
                                errors={formikProps?.errors}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mt-4">
                            <FilterSubmitButton
                              bttnText={"Submit"}
                              loading={addApiInProgress || updateApiInProcess}
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

export default AddCountry;
