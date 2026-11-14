import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";
import { Inputs } from "./type";

const TextArea: FC<Inputs> = (props) => {
  const { label, name, type, ...rest } = props;

  return (
    <div className="w-100">
      {label ? (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      ) : (
        ""
      )}
      <Field as="textarea" rows="4" name={name} type={type} {...rest} />
      <div className="error-message">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default TextArea;
