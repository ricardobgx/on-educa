import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  ButtonLabel,
  CancelButton,
  ConfirmQuitPracticeBackground,
  ConfirmQuitPracticeBox,
  ConfirmQuitPracticeLabel,
  QuitButton,
} from './styles';

interface IConfirmQuitPracticeProps {
  setQuitPractice: (value: boolean) => void;
}

const ConfirmQuitPractice = (props: IConfirmQuitPracticeProps): JSX.Element => {
  const { setQuitPractice } = props;
  const [backPage, setBackPage] = useState(false);

  return (
    <ConfirmQuitPracticeBackground>
      <ConfirmQuitPracticeBox>
        <ConfirmQuitPracticeLabel>
          Tem certeza que deseja sair? Todos os seus pontos serão perdidos!
        </ConfirmQuitPracticeLabel>
        <CancelButton onClick={() => setQuitPractice(false)}>
          <ButtonLabel>Voltar</ButtonLabel>
        </CancelButton>
        <QuitButton onClick={() => setBackPage(true)}>
          <ButtonLabel>Sair</ButtonLabel>
        </QuitButton>
        {backPage ? <Redirect to="/contents/12345" /> : null}
      </ConfirmQuitPracticeBox>
    </ConfirmQuitPracticeBackground>
  );
};

export default ConfirmQuitPractice;
