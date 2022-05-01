import React, { useState } from 'react';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  SignFormField,
  SignFormFieldInput,
  SignFormFieldInputBox,
  SignFormFieldLabel,
} from '../SignForms/styles';
import { ShowAndHidePasswordButton } from './styles';

const SignFormPasswordField: React.FC<ISignFormFieldProps> = (props) => {
  const { id, label, value, setValue } = props;

  const [passwordHidden, setPasswordHidden] = useState(true);

  const switchPasswordVisibility = (): void => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <SignFormField className="input-block">
      <SignFormFieldLabel htmlFor={id}>{label}</SignFormFieldLabel>
      <SignFormFieldInputBox>
        <SignFormFieldInput
          id={id}
          type={`${passwordHidden ? 'password' : 'text'}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
        />
        <ShowAndHidePasswordButton
          className={`${passwordHidden ? 'password-hidden' : ''}`}
          onClick={() => switchPasswordVisibility()}
        >
          <SmallMaterialIconOutlined icon="visibility" color="#fffff" />
        </ShowAndHidePasswordButton>
      </SignFormFieldInputBox>
    </SignFormField>
  );
};

export default SignFormPasswordField;
