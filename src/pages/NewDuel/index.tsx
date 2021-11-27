import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import SelectedContentCard from '../../components/NewDuel/SelectedContentCard';
import { Page } from '../components';
import {
  PageBox,
  NewDuelBox,
  NewDuelDetails,
  NewDuelContents,
  NewDuelContentsLabel,
  SearchContents,
  SearchContentsInput,
  ContentsFound,
  SelectedContents,
  SelectedContentsBox,
  NewDuelActions,
  CancelNewDuelButton,
  CancelNewDuelButtonLabel,
  CreateNewDuelButton,
  CreateNewDuelButtonLabel,
  NewDuelSettings,
  NewDuelSettingsLabel,
  NewDuelSettingsBox,
  NewDuelSettingsOption,
  NewDuelSettingsSelect,
} from './styles';

const selectedContents = [
  {
    id: '1',
    content: 'Substantivo comum',
    unit: 'Substantivos',
    subject: 'Língua Portuguesa',
  },
  {
    id: '2',
    content: 'Substantivo comum',
    unit: 'Substantivos',
    subject: 'Língua Portuguesa',
  },
  {
    id: '3',
    content: 'Substantivo comum',
    unit: 'Substantivos',
    subject: 'Língua Portuguesa',
  },
  {
    id: '4',
    content: 'Substantivo comum',
    unit: 'Substantivos',
    subject: 'Língua Portuguesa',
  },
  {
    id: '5',
    content: 'Substantivo comum',
    unit: 'Substantivos',
    subject: 'Língua Portuguesa',
  },
];

const NewDuel = (): JSX.Element => {
  const [createdDuel, setCreatedDuel] = useState(false);

  const createDuel = (): void => {
    setCreatedDuel(true);
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo duelo" />
        <NewDuelBox>
          <NewDuelDetails>
            <NewDuelContents>
              <NewDuelContentsLabel>Selecionar conteúdos</NewDuelContentsLabel>
              <SearchContents>
                <SearchContentsInput
                  type="text"
                  placeholder="Pesquisar conteúdo (exemplo: Substantivos)"
                />
                <ContentsFound />
              </SearchContents>
              <NewDuelContentsLabel>
                Conteúdos selecionados
              </NewDuelContentsLabel>
              <SelectedContents>
                <SelectedContentsBox>
                  {selectedContents.map((selectedContent) => (
                    <SelectedContentCard
                      key={selectedContent.id}
                      content={selectedContent.content}
                      subject={selectedContent.subject}
                      unit={selectedContent.unit}
                    />
                  ))}
                </SelectedContentsBox>
              </SelectedContents>
            </NewDuelContents>
            <NewDuelSettings>
              <NewDuelSettingsLabel>Detalhes do duelo</NewDuelSettingsLabel>
              <NewDuelSettingsBox>
                <NewDuelSettingsLabel>
                  Participantes por equipe
                </NewDuelSettingsLabel>
                <NewDuelSettingsSelect>
                  <NewDuelSettingsOption value="2">
                    2 pessoas
                  </NewDuelSettingsOption>
                </NewDuelSettingsSelect>
              </NewDuelSettingsBox>
              <NewDuelSettingsBox>
                <NewDuelSettingsLabel>
                  Questões por conteúdo
                </NewDuelSettingsLabel>
                <NewDuelSettingsSelect>
                  <NewDuelSettingsOption value="5">
                    5 questões
                  </NewDuelSettingsOption>
                </NewDuelSettingsSelect>
              </NewDuelSettingsBox>
              <NewDuelSettingsBox>
                <NewDuelSettingsLabel>
                  Tempo para cada questão
                </NewDuelSettingsLabel>
                <NewDuelSettingsSelect>
                  <NewDuelSettingsOption value="1">
                    1 minuto
                  </NewDuelSettingsOption>
                </NewDuelSettingsSelect>
              </NewDuelSettingsBox>
            </NewDuelSettings>
          </NewDuelDetails>
          <NewDuelActions>
            <CancelNewDuelButton to="/duels">
              <CancelNewDuelButtonLabel>Cancelar</CancelNewDuelButtonLabel>
            </CancelNewDuelButton>
            <CreateNewDuelButton onClick={() => createDuel()}>
              <CreateNewDuelButtonLabel>Criar duelo</CreateNewDuelButtonLabel>
            </CreateNewDuelButton>
            {createdDuel && <Redirect to="/duels/12345" />}
          </NewDuelActions>
        </NewDuelBox>
      </PageBox>
    </Page>
  );
};

export default NewDuel;
