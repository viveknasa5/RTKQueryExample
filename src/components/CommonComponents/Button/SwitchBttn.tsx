import React, { FC } from "react";

interface SwitchBttnProps {
  name?: string;
  onInputChange?: (value: boolean) => void;
  label?: string;
}
const SwitchBttn: FC<SwitchBttnProps> = (props) => {
  const { onInputChange = () => {}, name, label } = props;
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(e.target.checked) // Updated to pass boolean value
        }
      />
      {label && (
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      )}
    </div>
  );
};

export default SwitchBttn;
