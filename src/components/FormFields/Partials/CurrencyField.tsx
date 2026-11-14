import React, { FC } from "react";
import { Inputs } from "./type";
import { ErrorMessage, useField } from "formik";
import { formateForCurrency } from "../../../utilities/Utillities";

const CurrencyField: FC<Inputs> = (props) => {
  const { name, className, label, fieldType, maxLength, ...rest } = props;
  const [field, meta, helpers] = useField(name);
  console.log(meta, "sglknw");

  const handleCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formateForCurrency(
      e.target.value,
      maxLength ? maxLength : 10
    );
    helpers.setValue(inputValue); // Update Formik's field value
  };

  return (
    <div>
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
          maxLength={maxLength}
          onChange={handleCurrencyInput}
        />
        <div className="error-message">
          <ErrorMessage name={name} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyField;
