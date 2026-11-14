import { ErrorMessage, Field } from "formik";
import { Inputs } from "./type";
import React, { FC } from "react";

const InputField: FC<Inputs> = (props) => {
  const { name, className, label, ...rest } = props;
  return (
    <>
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <div className="input-group has-validation">
        <Field name={name} className={className} {...rest} />
        <div className="error-message">
          <ErrorMessage name={name} />
        </div>
      </div>
    </>
  );
};
export default InputField;
