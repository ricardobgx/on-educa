/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import Login from '../Login';
import Register from '../Register';
import { SignBox, SignTypeButton, SignTypeLabel } from './components';

export interface ISignProps {
  minHeight: string;
}

const Sign = (props: ISignProps): JSX.Element => {
  /* Local State */

  const [signType, setSignType] = useState('register');

  /* Props */

  const { minHeight } = props;

  /* Functions */

  const isRegister = (): boolean => signType === 'register';

  const changeSignType = (): void => {
    if (isRegister()) setSignType('login');
    else setSignType('register');
  };

  return (
    <SignBox style={{ minHeight }}>
      {isRegister() ? <Register changeSignType={changeSignType} /> : <Login />}
      <SignTypeLabel>
        {isRegister() ? 'Já tem uma conta? ' : 'Ainda não tem uma conta? '}
        <SignTypeButton onClick={() => changeSignType()}>
          {isRegister() ? 'Faça login' : 'Cadastre-se'}
        </SignTypeButton>
      </SignTypeLabel>
    </SignBox>
  );
};

export default Sign;
