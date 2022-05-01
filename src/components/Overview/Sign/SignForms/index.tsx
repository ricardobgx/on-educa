/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */

import React, { useState } from 'react';
import { TSignFormType } from '../../../../types/TSignFormType';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import {
  SignFormsBox,
  SignFormWrapper,
  Underline,
  SignFormLabel,
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
      <SignFormWrapper
        className={`form-wrapper ${
          signFormType === TSignFormType.SIGNIN ? 'is-active' : ''
        }`}
      >
        <SignFormLabel className="signin-label">
          Login
          <Underline className="underline" />
        </SignFormLabel>
        <SignInForm
          signFormType={signFormType}
          switchSignForm={switchSignForm}
        />
      </SignFormWrapper>
      <SignFormWrapper
        className={`form-wrapper ${
          signFormType === TSignFormType.SIGNUP ? 'is-active' : ''
        }`}
      >
        <SignFormLabel className="signup-label">
          Sign Up
          <Underline className="underline" />
        </SignFormLabel>
        <SignUpForm
          signFormType={signFormType}
          switchSignForm={switchSignForm}
        />
      </SignFormWrapper>
    </SignFormsBox>
  );
};

export default SignForms;
