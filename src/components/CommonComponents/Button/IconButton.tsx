import React, { FC } from "react";

interface IconButtonProps {
  onBttnClick: () => void;
  bttnAction: "Edit" | "Delete";
}
const IconButton: FC<IconButtonProps> = (props) => {
  const { onBttnClick = () => {}, bttnAction } = props;
  return (
    <span className="table-edit-bttn" onClick={() => onBttnClick()}>
      {bttnAction === "Edit" ? (
        <img src="/assets/images/edit.svg" alt="" />
      ) : (
        <img src="/assets/images/delete.svg" alt="" />
      )}
    </span>
  );
};

export default IconButton;
