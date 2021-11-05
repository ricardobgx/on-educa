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
  ScrollIcon,
} from './components';

import LoadAnimation from '../../components/App/LoadAnimation';
import Sign from '../../components/Overview/Sign/SignForm';

interface IState {
  loading: boolean;
}

export default class Overview extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  loadAnimation = (): void => {
    const { loading } = this.state as IState;
    if (loading) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
  };

  render(): JSX.Element {
    const minHeight = window.innerHeight;
    const { loading } = this.state as IState;

    return (
      <Page>
        {loading ? <LoadAnimation /> : null}
        <PlatformInformation style={{ minHeight }}>
          <PlatformInformationBox>
            <Information>
              <Title>ON EDUCA</Title>
              <Slogan>Sua plataforma de revisões online</Slogan>
              <Description>
                A ON EDUCA é uma plataforma desenvolvida com o intuito de ajudar
                no aprendizado de jovens do ensino médio disponibilizando
                exercícios e materiais de apoio ao estudante além de os
                professores terem uma visão melhor das dificuldades dos alunos
              </Description>
            </Information>
            <Functions>
              <Function>
                <Icon className="fas fa-comment-alt" />
                <Name>Chat com professores</Name>
              </Function>
              <Function>
                <Icon className="fas fa-book" />
                <Name>Conteúdos gratuitos</Name>
              </Function>
              <Function>
                <Icon className="fas fa-gamepad" />
                <Name>Gamificação</Name>
              </Function>
            </Functions>
          </PlatformInformationBox>
          <ScrollIcon className="fas fa-chevron-down" />
        </PlatformInformation>
        <Sign minHeight={minHeight} loadAnimation={this.loadAnimation} />
      </Page>
    );
  }
}
