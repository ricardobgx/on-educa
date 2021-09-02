import {
  OverviewBox,
  PlatformDescription,
  Description,
  Title,
  Content,
  Sign,
  Slogan,
  SignButton,
  OverviewImage,
  SignButtons
} from './styles';
import overviewBook from '../../assets/ilustrations/overview-book.png';

const Overview = () => {
  return (
    <OverviewBox>
      <PlatformDescription>
        <Description>
          <Title>Plataforma de apoio educacional para escolas públicas do Brasil</Title>
          <Content>A ON EDUCA é uma plataforma desenvolvida para web e mobile com o intuito de ajudar na educação de crianças e adolescentes no ensino fundamental disponibilizando exercícios e materiais de apoio ao estudante além de os professores terem uma visão melhor das dificuldades dos alunos</Content>
        </Description>
        <Sign>
          <Slogan>Cadastre-se e venha colaborar para um futuro melhor. Já tem uma conta? Faça o login e continue seus estudos</Slogan>
          <SignButtons>
            <SignButton to="/register">Cadastrar</SignButton>
            <SignButton to="/login">Login</SignButton>
          </SignButtons>
        </Sign>
      </PlatformDescription>
      <OverviewImage src={overviewBook}></OverviewImage>
    </OverviewBox>
  );
}

export default Overview;