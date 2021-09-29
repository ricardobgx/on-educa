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
import OnEducaAPI from '../../../services/api';

interface IUser {
  email: string;
  password: string;
}

interface IState extends IUser {
  userType: string;
}

export default class Login extends React.Component {
  state: IState = {
    userType: 'student',
    email: '',
    password: ''
  }

  // Login

  clearFields = () => {
    this.setState({
      email: '',
      password: ''
    });
  }

  loginUser = async () => {
    const { userType, email, password } = this.state;

    const userParams = {
      email,
      password
    } as IUser;

    if (userType === 'student') await this.loginStudent(userParams);
    else await this.loginTeacher(userParams);
  }

  loginStudent = async (studentParams: IUser) => {
    await OnEducaAPI.post('/students/login', studentParams).then(response => {
      this.loginSucess(response.data);
    }, error => {
      console.log(error);
    });
  }

  loginTeacher = async (teacherParams: IUser) => {
    await OnEducaAPI.post('/teachers/login', teacherParams).then(response => {
      this.loginSucess(response.data);
    }, error => {
      console.log(error);
    });
  }

  loginSucess = (token: string) => {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('email', this.state.email);
    window.localStorage.setItem('userType', this.state.userType);
    this.clearFields();
    window.location.reload();
  }

  // Tipo de formulario

  isStudent = () => {
    const { userType } = this.state;

    if (userType === 'student') return true;
    return false;
  }

  render() {
    return (
      <SignBox>
        <SignLabel>Entre</SignLabel>
        <SignFieldsBox>
          <SignField placeholder="E-mail" type="email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ email: event.target.value });
          }}></SignField>
          <SignField placeholder="Senha" type="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ password: event.target.value });
          }} onKeyUp={(event) => {
            if (event.key === 'Enter') this.loginUser();
          }}></SignField>
        </SignFieldsBox>
        <SignActions>
          <SignButton onClick={() => {
            this.loginUser();
          }}>Entrar</SignButton>
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