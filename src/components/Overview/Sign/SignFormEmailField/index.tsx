import React from 'react';
import {
  SignFormField,
  SignFormFieldInput,
  SignFormFieldInputBox,
  SignFormFieldLabel,
} from '../SignForms/styles';

const SignFormEmailField: React.FC<ISignFormFieldProps> = (props) => {
  const { id, label, value, setValue } = props;

  return (
    <SignFormField className="input-block">
      <SignFormFieldLabel htmlFor={id}>{label}</SignFormFieldLabel>
      <SignFormFieldInputBox>
        <SignFormFieldInput
          id={id}
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </SignFormFieldInputBox>
    </SignFormField>
  );
};

export default SignFormEmailField;
