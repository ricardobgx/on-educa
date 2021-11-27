import React from 'react';
import winners from '../../assets/ilustrations/undraw_winners.png';
import {
  SeeResultsButtonLabel,
  CongratulationsLabel,
  Page,
  PageBox,
  SeeResultsButton,
  CongratulationsImage,
} from './styles';

const DuelCongratulations = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <CongratulationsLabel>Equipe A venceu!!!</CongratulationsLabel>
        <CongratulationsImage src={winners} />
        <SeeResultsButton to="/duels/12345/results">
          <SeeResultsButtonLabel>Ver desempenho</SeeResultsButtonLabel>
        </SeeResultsButton>
      </PageBox>
    </Page>
  );
};

export default DuelCongratulations;
