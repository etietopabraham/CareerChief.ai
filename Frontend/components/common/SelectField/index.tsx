import React, { FC } from 'react';
import Select, { components, Props as SelectProps } from 'react-select';
import styled from 'styled-components';

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: '4px',
    borderColor: '#ccc',
    boxShadow: 'none',
    width: '400px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#f5f7fa' : 'transparent',
    ':hover': {
      backgroundColor: '#f5f7fa',
    },
  }),
};

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <CustomDropdownIcon />
      </components.DropdownIndicator>
    )
  );
};

const CustomDropdownIcon = styled.div`
  width: 10px;
  height: 10px;
  border-left: 2px solid #60666d;
  border-bottom: 2px solid #60666d;
  transform: rotate(-45deg);
`;

interface CustomSelectProps extends SelectProps {
  options: { value: any; label: string }[];
}

const SelectField: FC<CustomSelectProps> = ({ options, ...rest }) => {
  return (
    <Select
      components={{ DropdownIndicator }}
      styles={customStyles}
      options={options}
      {...rest}
    />
  );
};

export default SelectField;