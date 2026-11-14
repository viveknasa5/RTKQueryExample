import React, { FC } from "react";
import PasswordField from "./Partials/PasswordField";
import InputField from "./Partials/InputField";
import PhoneNumberField from "./Partials/PhoneNumberField";
import { Inputs } from "./Partials/type";
import ReactSelect from "./Partials/ReactSelect";
import DateRangePickerComponent from "./Partials/DateRangePickerComponent";
import CheckBox from "./Partials/CheckBox";
import TextArea from "./Partials/TextArea";
import TextEditor from "./Partials/TextEditor";
// import ImageUploader from "./Partials/ImageUploader";
import CurrencyField from "./Partials/CurrencyField";
import FileUploaderField from "./Partials/FileUploaderField";

const Controller: FC<Inputs> = (props) => {
  const { control, className, ...rest } = props;

  switch (control) {
    case "input":
      return (
        <InputField
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "password":
      return (
        <PasswordField
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "phone":
      return (
        <PhoneNumberField
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "select":
      return <ReactSelect className={className ? className : ""} {...rest} />;
    case "daterangepicker":
      return (
        <DateRangePickerComponent
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "textarea":
      return (
        <TextArea
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "textEditor":
      return (
        <TextEditor
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    // case "fileuploader":
    //   return (
    //     <ImageUploader
    //       className={className ? className : "form-control"}
    //       {...rest}
    //     />
    //   );
    case "currencyInput":
      return (
        <CurrencyField
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    case "fileuploader":
      return (
        <FileUploaderField
          className={className ? className : "form-control"}
          {...rest}
        />
      );
    default:
      return null;
  }
};
export default Controller;
