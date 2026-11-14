import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  buttonType?: any;
  bttnText?: string;
  loading?: boolean;
}

const FilterSubmitButton: FC<ButtonProps> = (props) => {
  const { className, buttonType, bttnText, loading } = props;
  return (
    <button
      className={className ? className : "btn btn-primary "}
      type={buttonType ? buttonType : "submit"}
    >
      {loading ? (
        <img src="/assets/images/whiteloader.gif" className="h-23 " alt="" />
      ) : bttnText ? (
        bttnText
      ) : (
        "Apply"
      )}
    </button>
  );
};

export default FilterSubmitButton;
