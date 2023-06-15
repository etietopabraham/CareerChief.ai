import React from 'react';
import { InputStyles } from './styles';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface InputType {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: () => void;
  disabled?: boolean;
  width?: string;
  height?: string;
  register?: UseFormRegister<FieldValues>;
  maxLength?: number;
  defaultValue?: string;
}

const Input = ({
  type,
  label,
  placeholder,
  className,
  value,
  onChange,
  disabled,
  width,
  height,
  register,
  name,
  maxLength,
  defaultValue,
}: InputType) => {
  return (
    <InputStyles className={className} width={width} height={height}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...register && { ...register(name) }}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </InputStyles>
  );
};

export default Input;
