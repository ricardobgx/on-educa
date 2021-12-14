/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewDuelContents from '../../components/NewDuel/NewDuelContents';
import NewDuelSettings from '../../components/NewDuel/NewDuelSettings';
import { IContent } from '../../interfaces/IContent';
import { Page } from '../components';
import {
  PageBox,
  NewDuelBox,
  NewDuelDetails,
  NewDuelActions,
  CancelNewDuelButton,
  CancelNewDuelButtonLabel,
  CreateNewDuelButton,
  CreateNewDuelButtonLabel,
} from './styles';

const NewDuel = (): JSX.Element => {
  /* Local State */

  const [maxParticipants, setMaxParticipants] = useState(0);
  const [questionsPerContent, setQuestionsPerContent] = useState(0);
  const [timeForQuestion, setTimeForQuestion] = useState(0);

  const [contentsName, setContentsName] = useState('');
  const [contentsFound, setContentsFound] = useState<IContent[]>([]);

  const [selectedContents, setSelectedContents] = useState<IContent[]>([]);

  const [createdDuel, setCreatedDuel] = useState(false);

  const createDuel = (): void => {
    setCreatedDuel(true);
  };

  const newDuelContentsProps = {
    newDuelSelectedContentsProps: {
      selectedContents,
      setSelectedContents,
    },
    newDuelSearchContentsProps: {
      contentsName,
      setContentsName,
      contentsFound,
      setContentsFound,
      selectedContents,
      setSelectedContents,
    },
  };

  const newDuelSettingsProps = {
    maxParticipants,
    setMaxParticipants,
    questionsPerContent,
    setQuestionsPerContent,
    timeForQuestion,
    setTimeForQuestion,
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo duelo" />
        <NewDuelBox>
          <NewDuelDetails>
            <NewDuelContents {...newDuelContentsProps} />
            <NewDuelSettings {...newDuelSettingsProps} />
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
