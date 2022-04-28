import React from 'react';
import SectionLabel from '../../App/SectionLabel';
import DuelTeamsList from '../DuelTeamsList';
import {
  BackToDuelButton,
  BackToDuelButtonLabel,
  DeleteDuelButton,
  DeleteDuelButtonLabel,
  DuelActions,
  QuitDuelButton,
  QuitDuelButtonLabel,
  TeamsResultsBox,
} from './styles';

interface ITeamResultsProps {
  teams: IDuelTeam[];
}

const TeamsResults = (props: ITeamResultsProps): JSX.Element => {
  const { teams } = props;

  const isDuelOwner = (): boolean => {
    return false;
  };

  return (
    <TeamsResultsBox>
      <SectionLabel backLink="" label="Desempenho das equipes" />
      <DuelTeamsList teams={teams} />
      <DuelActions>
        <BackToDuelButton to="/duels/12345">
          <BackToDuelButtonLabel>Voltar para o duelo</BackToDuelButtonLabel>
        </BackToDuelButton>
        {!isDuelOwner() ? (
          <QuitDuelButton to="/duels">
            <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
          </QuitDuelButton>
        ) : (
          <DeleteDuelButton>
            <DeleteDuelButtonLabel>Excluir duelo</DeleteDuelButtonLabel>
          </DeleteDuelButton>
        )}
      </DuelActions>
    </TeamsResultsBox>
  );
};

export default TeamsResults;
