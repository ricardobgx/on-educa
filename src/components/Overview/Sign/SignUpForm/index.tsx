import React, { useState } from 'react';
import { TSignFormType } from '../../../../types/TSignFormType';
import SignFormEmailField from '../SignFormEmailField';
import SignFormPasswordField from '../SignFormPasswordField';
import {
  SignForm,
  SignFormButton,
  SignFormButtonLabel,
  SignFormFields,
} from '../SignForms/styles';
import SignFormTextField from '../SignFormTextField';

const SignUpForm: React.FC<ISignFormProps> = (props) => {
  const { signFormType, switchSignForm } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignForm
      className={`form form-signup ${
        signFormType === TSignFormType.SIGNIN ? 'active' : ''
      }`}
    >
      <SignFormFields className="sign-form-fields">
        <SignFormTextField
          id="signup-name"
          label="Nome"
          value={name}
          setValue={setName}
        />
        <SignFormEmailField
          id="signup-email"
          label="E-mail"
          value={email}
          setValue={setEmail}
        />
        <SignFormPasswordField
          id="signup-password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
      </SignFormFields>
      <SignFormButton className="btn-login block-shadow-button main-action bd-rd-30">
        <SignFormButtonLabel>Cadastrar</SignFormButtonLabel>
      </SignFormButton>
      <SignFormButton
        onClick={() => switchSignForm()}
        className="btn-switch switcher block-shadow-button secondary-action bd-rd-30"
      >
        <SignFormButtonLabel> Entrar</SignFormButtonLabel>
      </SignFormButton>
    </SignForm>
  );
};

export default SignUpForm;
