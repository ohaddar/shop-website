import React, { ChangeEventHandler } from "react";

interface inputTextProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className: string;
}
const TextInput: React.FC<inputTextProps> = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </>
  );
};

export default TextInput;
