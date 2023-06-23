import React, { useEffect, useState } from 'react';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';
import { CheckboxStyles } from './styles';

interface CheckboxTypes {
  name: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<any>;
  initialState: boolean;
  label?: string;
  fontSize?: string;
}

const Checkbox = ({ name, label, fontSize, register, setValue, initialState }: CheckboxTypes) => {
  const [checked, setChecked] = useState<boolean>(initialState);

  useEffect(() => {
    setChecked(initialState);
  }, [initialState]);

  useEffect(() => {
    setValue(name, checked);
  }, [checked, name, setValue]);

  const handleCheckboxChange = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <CheckboxStyles fontSize={fontSize}>
      <label className="container-checkbox">
        {label}
        <input
          type="checkbox"
          checked={checked}
          {...register && { ...register(name) }}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </CheckboxStyles>
  );
};

export default Checkbox;
