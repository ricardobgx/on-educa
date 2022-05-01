/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewDuelContents from '../../components/NewDuel/NewDuelContents';
import NewDuelSettings from '../../components/NewDuel/NewDuelSettings';
import { IDuelParams } from '../../dto/IDuelParams';
import { createDuel as createDuelRequest } from '../../functions/duel';
import OnEducaAPI from '../../services/api';
import { RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
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
  const pageHistory = useHistory();

  /* GlobalRootState */

  const { student, aplication } = useSelector((store: RootState) => store);

  const { id } = student;
  const { token } = aplication;

  /* LocalRootState */

  const maxParticipantsValues = [1, 2, 4];
  const timeForQuestionValues = [1, 3, 5];

  const [maxParticipants, setMaxParticipants] = useState(
    maxParticipantsValues[0],
  );
  const [questionsPerContent, setQuestionsPerContent] = useState(
    maxParticipantsValues[0] * 2,
  );
  const [timeForQuestion, setTimeForQuestion] = useState(
    timeForQuestionValues[0],
  );

  const [contentsName, setContentsName] = useState('');
  const [contentsFound, setContentsFound] = useState<IContent[]>([]);

  const [selectedContents, setSelectedContents] = useState<IContent[]>([]);

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
    maxParticipantsValues,
    timeForQuestionValues,
  };

  /* Functions */

  const createDuelSucess = (duel: IDuel): void => {
    pageHistory.push(`/duels/${duel.id}`);
  };

  const createDuelError = (): void => {
    console.log('Ocorreu um erro');
  };

  const createDuel = async (): Promise<void> => {
    const contentsId = selectedContents.map(
      (selectedContent) => selectedContent.id,
    );

    const duelParams: IDuelParams = {
      maxGroupParticipants: maxParticipants,
      questionsPerContent,
      timeForQuestion,
      studentId: id,
      contentsId,
    };

    await createDuelRequest(
      OnEducaAPI,
      duelParams,
      token,
      createDuelSucess,
      createDuelError,
    );
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
            <CancelNewDuelButton
              className="block-shadow-button secondary-action"
              to="/duels"
            >
              <CancelNewDuelButtonLabel>Cancelar</CancelNewDuelButtonLabel>
            </CancelNewDuelButton>
            <CreateNewDuelButton
              className="block-shadow-button main-action"
              onClick={() => createDuel()}
            >
              <CreateNewDuelButtonLabel>Criar duelo</CreateNewDuelButtonLabel>
            </CreateNewDuelButton>
          </NewDuelActions>
        </NewDuelBox>
      </PageBox>
    </Page>
  );
};

export default NewDuel;
