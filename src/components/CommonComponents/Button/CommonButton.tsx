import React, { FC } from "react";
interface InputProps {
  className?: string;
  buttonType?: any;
  bttnText?: string;
  loading?: boolean;
  onClickBttn?: () => void;
}
const CommonButton: FC<InputProps> = (props) => {
  const {
    className,
    buttonType,
    bttnText,
    loading,
    onClickBttn = () => {},
  } = props;
  return (
    <div>
      <button
        className={className ? className : "btn btn-primary "}
        type={buttonType ? buttonType : "button"}
        onClick={() => onClickBttn()}
      >
        {loading ? (
          <img src="/assets/images/whiteloader.gif" className="h-23 " alt="" />
        ) : bttnText ? (
          bttnText
        ) : (
          "Apply"
        )}
      </button>
    </div>
  );
};

export default CommonButton;
