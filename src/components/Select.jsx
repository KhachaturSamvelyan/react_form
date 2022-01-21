import React from "react";
import Select, { components } from "react-select";
import { useController } from "react-hook-form";

import { ReactComponent as Logo } from "../arrow.svg";

const options = [
  { value: "Русский", label: "Русский" },
  { value: "Английский", label: "Английский" },
  { value: "Китайский", label: "Китайский" },
  { value: "Испанский", label: "Испанский" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Logo />
    </components.DropdownIndicator>
  );
};

const colourStyles = {
  indicatorSeparator: () => ({ display: "none" }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "rgba(124, 156, 191, 1)",
      fontFamily: "'IBM Plex Sans', sans-serif",
    };
  },
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    padding: 7,
    cursor: "pointer",
    borderRadius: "6px",
    border: "1px solid #DBE2EA",
  }),
  singleValue: (provided, state) => {
    const color = "rgba(44, 39, 56, 1)";
    const fontFamily = "'IBM Plex Sans', sans-serif";
    return { ...provided, color, fontFamily };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#EBF4F8" : "white",
      color: "#756F86",
      padding: "12px 15px",
      cursor: "pointer",
    };
  },
  menu: (provided, state) => ({
    ...provided,

    borderBottom: "1px dotted pink",
    padding: "8px 0",
    border: "1px solid #DBE2EA",
    borderRadius: "6px",
  }),
};

export const SelectField = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <>
     

        <Select
          options={options}
          styles={colourStyles}
          placeholder={"Язык"}
          components={{ DropdownIndicator }}
          {...field}
        />
      
     
    </>
  );
};
