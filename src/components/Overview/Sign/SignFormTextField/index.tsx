import React from 'react';
import {
  SignFormField,
  SignFormFieldInput,
  SignFormFieldInputBox,
  SignFormFieldLabel,
} from '../SignForms/styles';

const SignFormTextField: React.FC<ISignFormFieldProps> = (props) => {
  const { id, label, value, setValue } = props;

  return (
    <SignFormField className="input-block">
      <SignFormFieldLabel htmlFor={id}>{label}</SignFormFieldLabel>
      <SignFormFieldInputBox>
        <SignFormFieldInput
          id={id}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
        />
      </SignFormFieldInputBox>
    </SignFormField>
  );
};

export default SignFormTextField;
