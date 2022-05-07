import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../../store';
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
  const dispatch = useDispatch();
  const { loadSignUpCommonData } = bindActionCreators(ActionCreators, dispatch);

  const { signFormType, switchSignForm } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pageHistory = useHistory();

  const nextSignUpStep = (): void => {
    loadSignUpCommonData({ name, email, password });
    pageHistory.push('/select-user-type');
  };

  return (
    <SignForm
      className={`bd-rd-30 with-shadow form form-signup ${
        signFormType === TSignFormType.SIGNUP ? 'is-active' : 'is-not-active'
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
      <SignFormButton
        onClick={() => nextSignUpStep()}
        disabled={!email.trim() || !name.trim() || !password.trim()}
        className="btn-login block-shadow-button main-action bd-rd-20"
      >
        <SignFormButtonLabel>Cadastrar</SignFormButtonLabel>
      </SignFormButton>
      <SignFormButton
        onClick={() => switchSignForm()}
        className="btn-switch switcher block-shadow-button secondary-action bd-rd-20"
      >
        <SignFormButtonLabel> Entrar</SignFormButtonLabel>
      </SignFormButton>
    </SignForm>
  );
};

export default SignUpForm;
