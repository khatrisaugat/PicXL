import React from "react";
import {
  FormGroup,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <FormGroup>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel otherProps={otherProps}>{label}</FormInputLabel>
      ) : null}
    </FormGroup>
  );
}

export default FormInput;
