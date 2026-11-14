import Select, { SingleValue } from "react-select";

export interface Inputs {
  name: string,
  className?: string,
  control?: 'input' | 'daterangepicker' | 'select' | 'password' | 'phone' | 'checkbox' | 'textarea' | 'textEditor' | 'fileuploader' | 'currencyInput',
  label?: string,
  type?: string,
  errors?: any,
  maxLength?: number,
  placeholder?: string,
  value?: any,
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  // onDateChange:(e: React.ChangeEvent<HTMLInputElement>)=> void,
  options?: any,
  classNamePrefix?: string,
  onChange?: (event: { target: { name: string; value: SingleValue<OptionType> | null } }) => void;
  fromValue?: any,
  toValue?: any,
  onDateChange?: any,
  fileTypes?: any,
  fieldType?: string,
  disabled?: boolean,
  extensionTypes?: any,
  isProfile?: any,
}


interface OptionType {
  value: string;
  label: string;
}
