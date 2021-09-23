import React from 'react';
import {
  Page,
  PlatformInformation,
  PlatformInformationBox,
  Information,
  Title,
  Slogan,
  Description,
  Functions,
  Function,
  Icon,
  Name,
  Sign,
  ScrollIcon,
  SignTypeLabel,
  SignTypeButton
} from './components';

import teacherChat from '../../assets/icons/teacher.png';
import books from '../../assets/icons/book.png';
import joystick from '../../assets/icons/console.png';
import Register from '../../components/Sign/Register';
import Login from '../../components/Sign/Login';

interface IState {
  signType: string;
}

export default class Overview extends React.Component {
  state: IState = {
    signType: 'register',
  }

  isRegister = () => {
    const { signType } = this.state;

    if (signType === 'register') return true;
    return false;
  }

  render() {

    const minHeight = window.innerHeight;

    return (
      <Page>
        <PlatformInformation style={{ minHeight }}>
          <PlatformInformationBox>
            <Information>
              <Title>ON EDUCA</Title>
              <Slogan>Sua plataforma de revisões online</Slogan>
              <Description>A ON EDUCA é uma plataforma desenvolvida com o intuito de ajudar no aprendizado de jovens do ensino médio disponibilizando exercícios e materiais de apoio ao estudante além de os professores terem uma visão melhor das dificuldades dos alunos</Description>
            </Information>
            <Functions>
              <Function>
                <Icon src={teacherChat}></Icon>
                <Name>Chat com professores</Name>
              </Function>
              <Function>
                <Icon src={books}></Icon>
                <Name>Conteúdos gratuitos</Name>
              </Function>
              <Function>
                <Icon src={joystick}></Icon>
                <Name>Gamificação</Name>
              </Function>
            </Functions>
          </PlatformInformationBox>
          <ScrollIcon className="fas fa-chevron-down"></ScrollIcon>
        </PlatformInformation>
        <Sign style={{ minHeight }}>
          {
            (this.isRegister() ?
              <Register></Register>
              :
              <Login></Login>
            )
          }
          <SignTypeLabel>{(this.isRegister() ? 'Já tem uma conta? ' : 'Ainda não tem uma conta? ')}<SignTypeButton onClick={() => {
            if (this.isRegister()) {
              this.setState({ signType: 'login' });
            } else {
              this.setState({ signType: 'register' });
            }
          }}>{(this.isRegister() ? 'Faça login' : 'Cadastre-se')}</SignTypeButton></SignTypeLabel>
        </Sign>
      </Page>
    );
  }
}