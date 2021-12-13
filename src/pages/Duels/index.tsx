import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import DuelCard from '../../components/Duels/DuelCard';
import { Page } from '../components';
import {
  PageBox,
  DuelsBox,
  DuelsActions,
  NewDuelButton,
  NewDuelButtonLabel,
  NewDuelButtonIcon,
  SearchDuels,
  SearchDuelsInputBox,
  SearchDuelsInput,
  ClearSearchDuelsInputButton,
  ClearSearchDuelsInputButtonIcon,
  SearchDuelsButton,
  SearchDuelsButtonIcon,
  DuelsFiltersButton,
  DuelsFiltersButtonLabel,
  DuelsFiltersButtonIcon,
  DuelsList,
  DuelsActionsBox,
  DuelsListBox,
} from './styles';

const duels = [
  {
    id: '1',
    ownerName: 'Aluno 1',
    ownerPicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    subjects: ['Matemática, Física, Biologia'],
    contents: ['Funções', 'Leis de Newton', 'Células'],
    status: 'waiting',
    participants: 7,
    maxParticipants: 8,
  },
  {
    id: '2',
    ownerName: 'Aluno 1',
    ownerPicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    subjects: ['Matemática, Física, Biologia'],
    contents: ['Funções', 'Leis de Newton', 'Células'],
    status: 'started',
    participants: 4,
    maxParticipants: 4,
  },
  {
    id: '3',
    ownerName: 'Aluno 1',
    ownerPicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    subjects: ['Matemática, Física, Biologia'],
    contents: ['Funções', 'Leis de Newton', 'Células'],
    status: 'waiting',
    participants: 7,
    maxParticipants: 8,
  },
  {
    id: '4',
    ownerName: 'Aluno 1',
    ownerPicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    subjects: ['Matemática, Física, Biologia'],
    contents: ['Funções', 'Leis de Newton', 'Células'],
    status: 'waiting',
    participants: 7,
    maxParticipants: 8,
  },
];

const Duels = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Duelos" />
        <DuelsBox>
          <DuelsActions>
            <SearchDuels>
              <SearchDuelsInputBox>
                <SearchDuelsInput
                  type="text"
                  placeholder="Digite algo (código do duelo, nome do aluno)"
                />
                <ClearSearchDuelsInputButton>
                  <ClearSearchDuelsInputButtonIcon className="fas fa-times" />
                </ClearSearchDuelsInputButton>
              </SearchDuelsInputBox>
              <SearchDuelsButton>
                <SearchDuelsButtonIcon className="fas fa-search" />
              </SearchDuelsButton>
            </SearchDuels>
            <DuelsActionsBox>
              <NewDuelButton to="/new-duel">
                <NewDuelButtonLabel>Novo duelo</NewDuelButtonLabel>
                <NewDuelButtonIcon className="fas fa-plus" />
              </NewDuelButton>
              <DuelsFiltersButton>
                <DuelsFiltersButtonLabel>Filtros</DuelsFiltersButtonLabel>
                <DuelsFiltersButtonIcon className="fas fa-sliders-h" />
              </DuelsFiltersButton>
            </DuelsActionsBox>
          </DuelsActions>
          <DuelsList>
            <DuelsListBox>
              {duels.map((duel) => (
                <DuelCard
                  key={duel.id}
                  id={duel.id}
                  contents={duel.contents}
                  maxParticipants={duel.maxParticipants}
                  participants={duel.participants}
                  ownerName={duel.ownerName}
                  status={duel.status}
                  subjects={duel.subjects}
                />
              ))}
            </DuelsListBox>
          </DuelsList>
        </DuelsBox>
      </PageBox>
    </Page>
  );
};

export default Duels;
