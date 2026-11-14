import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { FC } from "react";
import { Inputs } from "./type";
import { ErrorMessage } from "formik";
import { useField } from "formik";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaRegCalendar } from "react-icons/fa6";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateRangePickerComponent: FC<Inputs> = (props) => {
  const {
    label,
    name,
    placeholder,
    className,
    fromValue,
    toValue,
    onDateChange,
    ...rest
  } = props;

  const [field, meta, helpers] = useField(name);

  console.log(field, meta, "sgkl");
  const handleDateChange = (value: any) => {
    helpers.setValue(value);
  };
  return (
    <>
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <DateRangePicker
        {...rest}
        onChange={onDateChange ? onDateChange : handleDateChange}
        clearIcon={false}
        value={[fromValue, toValue]}
        // value={field.value || [null, null]}
        className={className}
        dayPlaceholder={"DD"}
        monthPlaceholder={"MM"}
        yearPlaceholder={"YYYY"}
        calendarIcon={<FaRegCalendar />}
        name={name}
      />
      <div className="error-message">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default DateRangePickerComponent;
