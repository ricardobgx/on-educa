import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  ButtonLabel,
  CancelButton,
  ConfirmQuitDuelBackground,
  ConfirmQuitDuelBox,
  ConfirmQuitDuelLabel,
  QuitButton,
} from './styles';

interface IConfirmQuitDuelProps {
  setQuitDuel: (value: boolean) => void;
}

const ConfirmQuitDuel = (props: IConfirmQuitDuelProps): JSX.Element => {
  const { setQuitDuel } = props;
  const [backPage, setBackPage] = useState(false);

  return (
    <ConfirmQuitDuelBackground>
      <ConfirmQuitDuelBox>
        <ConfirmQuitDuelLabel>
          Tem certeza que deseja sair? Todos os seus pontos serão perdidos!
        </ConfirmQuitDuelLabel>
        <CancelButton onClick={() => setQuitDuel(false)}>
          <ButtonLabel>Voltar</ButtonLabel>
        </CancelButton>
        <QuitButton onClick={() => setBackPage(true)}>
          <ButtonLabel>Sair</ButtonLabel>
        </QuitButton>
        {backPage ? <Redirect to="/contents/12345" /> : null}
      </ConfirmQuitDuelBox>
    </ConfirmQuitDuelBackground>
  );
};

export default ConfirmQuitDuel;
