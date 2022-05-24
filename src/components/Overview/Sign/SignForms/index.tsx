/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */

import React, { useState } from 'react';
import { TSignFormType } from '../../../../types/TSignFormType';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import {
  SignFormsBox,
  Underline,
  SignFormLabel,
  SignFormLabels,
  SignFormsWrapper,
} from './styles';

const SignForms: React.FC = () => {
  const [signFormType, setSignFormType] = useState(TSignFormType.SIGNIN);

  const switchSignForm = (newSignFormType?: number): void => {
    if (newSignFormType) {
      setSignFormType(newSignFormType);
      return;
    }

    if (signFormType === TSignFormType.SIGNIN)
      setSignFormType(TSignFormType.SIGNUP);
    else setSignFormType(TSignFormType.SIGNIN);
  };

  return (
    <SignFormsBox className="forms">
      <SignFormLabels>
        <SignFormLabel
          className={`signin-label ${
            signFormType === TSignFormType.SIGNIN ? 'is-active' : ''
          }`}
        >
          Entrar
          <Underline className="underline" />
        </SignFormLabel>
        <SignFormLabel
          className={`signup-label ${
            signFormType === TSignFormType.SIGNUP ? 'is-active' : ''
          }`}
        >
          Cadastrar
          <Underline className="underline" />
        </SignFormLabel>
      </SignFormLabels>
      <SignFormsWrapper
        className={`${
          signFormType === TSignFormType.SIGNIN && 'login-selected'
        }`}
      >
        <SignInForm
          signFormType={signFormType}
          switchSignForm={switchSignForm}
        />
        <SignUpForm
          signFormType={signFormType}
          switchSignForm={switchSignForm}
        />
      </SignFormsWrapper>
    </SignFormsBox>
  );
};

export default SignForms;
