import { ErrorMessage, useField } from "formik";
import React, { FC } from "react";
import { Inputs } from "./type";
import {
  formateForCurrency,
  formatePhoneNumber,
} from "../../../utilities/Utillities";

const PhoneNumberField: FC<Inputs> = (props) => {
  const { name, className, label, fieldType, maxLength = 10, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  console.log(meta, "sdgljn");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formatePhoneNumber(e.target.value, maxLength);
    helpers.setValue(inputValue); // Update Formik's field value
  };

  const handleCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formateForCurrency(e.target.value, maxLength);
    helpers.setValue(inputValue); // Update Formik's field value
  };
  return (
    <>
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <div className="input-group has-validation">
        <input
          id={name}
          name={name}
          className={className}
          {...rest}
          value={field.value}
          onChange={
            fieldType === "phone" ? handleInputChange : handleCurrencyInput
          }
        />
        <div className="error-message">
          <ErrorMessage name={name} />
        </div>
      </div>
    </>
  );
};

export default PhoneNumberField;
