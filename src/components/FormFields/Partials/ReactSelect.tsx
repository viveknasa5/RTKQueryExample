import React, { FC } from "react";
import Select, { SingleValue } from "react-select";
import { Inputs } from "./type";
import { ErrorMessage, useField } from "formik";

interface OptionType {
  value: string;
  label: string;
}

const ReactSelect: FC<Inputs> = (props) => {
  const {
    name,
    className,
    options,
    placeholder,
    classNamePrefix,
    onChange,
    label,
  } = props;
  const [field, meta, helpers] = useField(name);
  console.log(meta, "sdglkn");
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    helpers.setValue(selectedOption?.value ?? "");

    if (onChange) {
      onChange({ target: { name, value: selectedOption } });
    }
  };
  return (
    <>
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <Select
        {...field}
        classNamePrefix={classNamePrefix}
        options={options}
        placeholder={placeholder}
        className={className || "cstm-select"}
        value={
          field?.value
            ? options?.find((option: any) => option?.value === field?.value)
            : null
        }
        onChange={handleChange}
      />
      <p className="error-message">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};

export default ReactSelect;
