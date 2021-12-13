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

import Sign from '../../components/Overview/Sign/SignForm';

const Overview = (): JSX.Element => {
  const minHeight = `${window.innerHeight}px`;

  return (
    <Page>
      <PlatformInformation style={{ minHeight }}>
        <PlatformInformationBox>
          <Information>
            <Title>ON EDUCA</Title>
            <Slogan>Sua plataforma de revisões online</Slogan>
            <Description>
              A ON EDUCA é uma plataforma desenvolvida com o intuito de ajudar
              no aprendizado de jovens do ensino fundamental e médio
              disponibilizando exercícios e materiais de apoio ao estudante além
              de professores para sanar as dúvidas dos alunos
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
      <Sign minHeight={minHeight} />
    </Page>
  );
};

export default Overview;
