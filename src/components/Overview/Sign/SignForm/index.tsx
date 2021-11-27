import React from 'react';
import Login from '../Login';
import Register from '../Register';
import { SignBox, SignTypeButton, SignTypeLabel } from './components';
import { ISignProps } from './interfaces';

interface IState {
  signType: string;
  userType: string;
}

const DEFAULT_STATE: IState = {
  signType: 'register',
  userType: 'student',
};

export default class Sign extends React.Component<ISignProps> {
  constructor(props: ISignProps) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  isRegister = (): boolean => {
    const { signType } = this.state as IState;

    if (signType === 'register') return true;
    return false;
  };

  isStudent = (): boolean => {
    const { userType } = this.state as IState;

    if (userType === 'student') return true;
    return false;
  };

  changeUserType = (): void => {
    if (this.isStudent()) this.setState({ userType: 'teacher' });
    else this.setState({ userType: 'student' });
  };

  changeSignType = (): void => {
    if (this.isRegister()) this.setState({ signType: 'login' });
    else this.setState({ signType: 'register' });
  };

  render(): JSX.Element {
    const { loadAnimation, minHeight } = this.props;
    const { userType } = this.state as IState;

    return (
      <SignBox style={{ minHeight }}>
        {this.isRegister() ? (
          <Register
            isStudent={this.isStudent}
            changeUserType={this.changeUserType}
            loadAnimation={loadAnimation}
            userType={userType}
          />
        ) : (
          <Login
            isStudent={this.isStudent}
            changeUserType={this.changeUserType}
            loadAnimation={loadAnimation}
            userType={userType}
          />
        )}

        <SignTypeLabel>
          {this.isRegister()
            ? 'Já tem uma conta? '
            : 'Ainda não tem uma conta? '}
          <SignTypeButton
            onClick={() => {
              this.changeSignType();
            }}
          >
            {this.isRegister() ? 'Faça login' : 'Cadastre-se'}
          </SignTypeButton>
        </SignTypeLabel>
      </SignBox>
    );
  }
}
