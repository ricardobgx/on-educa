import React from 'react';
import {
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
  InformationHeader,
} from './styles';

const PlatformInformation: React.FC = () => {
  return (
    <PlatformInformationBox>
      <Information>
        <InformationHeader>
          <Title>ON EDUCA</Title>
          <Slogan>Sua plataforma de revisões online</Slogan>
          <Description>
            A ON EDUCA é uma plataforma desenvolvida com o intuito de ajudar no
            aprendizado de jovens do ensino fundamental e médio disponibilizando
            exercícios e materiais de apoio ao estudante além de professores
            para sanar as dúvidas dos alunos
          </Description>
        </InformationHeader>
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
      </Information>
      <ScrollIcon className="fas fa-chevron-down" />
    </PlatformInformationBox>
  );
};

export default PlatformInformation;
