import React from 'react';
import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignField,
  SignActions,
  SignButton,
  ChangeSignUser
} from '../components';

interface IState {
  userType: string;
}

export default class Login extends React.Component {
  state: IState = {
    userType: 'student'
  }

  isStudent = () => {
    const { userType } = this.state;

    if (userType === 'student') return true;
    return false;
  }

  login = async () => {

  }

  render() {
    return (
      <SignBox>
        <SignLabel>Entre</SignLabel>
        <SignFieldsBox>
          <SignField placeholder="E-mail"></SignField>
          <SignField placeholder="Senha"></SignField>
        </SignFieldsBox>
        <SignActions>
          <SignButton>Entrar</SignButton>
          <ChangeSignUser onClick={() => {
            if (this.isStudent()) {
              this.setState({ userType: 'teacher' });
            } else {
              this.setState({ userType: 'student' });
            }
          }}>Sou {(this.isStudent() ? 'professor' : 'aluno')}</ChangeSignUser>
        </SignActions>
      </SignBox>
    );
  }
}