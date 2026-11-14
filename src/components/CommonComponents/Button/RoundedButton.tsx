import React, { FC } from "react";
interface ButtonProps {
  className?: string;
  buttonType?: any;
  bttnText?: string;
  loading?: boolean;
}

const RoundedButton: FC<ButtonProps> = (props) => {
  const { className, bttnText, loading } = props;
  return (
    <button
      className={className ? className : "btn btn-primary rounded-pill"}
      type={"button"}
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

export default RoundedButton;
