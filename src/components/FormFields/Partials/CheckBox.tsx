import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";
import { Inputs } from "./type";

const CheckBox: FC<Inputs> = (props) => {
  const { name, label, ...rest } = props;
  return (
    <>
      <div className="form-check">
        <Field type="checkbox" name={name} className="form-check-input" />
        <label className="form-check-label">{label}</label>
        <div>
          <ErrorMessage name={name} {...rest} />
        </div>
      </div>
    </>
  );
};

export default CheckBox;
