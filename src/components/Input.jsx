import React from "react";
import { useController } from "react-hook-form";

export const Input = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <>
    
        <label className="label-inp" htmlFor={props.for}>
          <p>{props.labelName}</p>
          <input id={props.for} {...field} placeholder={props.name} />
          <p className="error">
            {fieldState.error && "Введено не корректное значение"}
          </p>
        </label>
   
    </>
  );
};
