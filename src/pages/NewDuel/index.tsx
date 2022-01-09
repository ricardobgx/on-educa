/* eslint-disable react/jsx-props-no-spreading */

import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import NewDuelContents from '../../components/NewDuel/NewDuelContents';
import NewDuelSettings from '../../components/NewDuel/NewDuelSettings';
import { IDuelParams } from '../../dto/IDuelParams';
import { createDuel as createDuelRequest } from '../../functions/duel';
import { IContent } from '../../interfaces/IContent';
import { IDuel } from '../../interfaces/IDuel';
import OnEducaAPI from '../../services/api';
import { ActionCreators, State } from '../../store';
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
import { createDuelTeamParticipationByDuel } from '../../functions/duelTeamParts';
import { IDuelTeamParticipationByDuelParams } from '../../dto/IDuelTeamParticipationByDuelParams';

const NewDuel = (): JSX.Element => {
  /* Global State */

  const {
    user,
    duel: globalDuel,
    aplication,
  } = useSelector((store: State) => store);

  const { id } = user;
  const { token } = aplication;

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Local State */

  const [maxParticipants, setMaxParticipants] = useState(1);
  const [questionsPerContent, setQuestionsPerContent] = useState(5);
  const [timeForQuestion, setTimeForQuestion] = useState(1);

  const [contentsName, setContentsName] = useState('');
  const [contentsFound, setContentsFound] = useState<IContent[]>([]);

  const [selectedContents, setSelectedContents] = useState<IContent[]>([]);

  const [duelIsCreated, setDuelIsCreated] = useState(false);

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

  /* Functions */

  const createDuelOwnerParticipationSucess = (): void => {
    setDuelIsCreated(true);
  };

  const createDuelOwnerParticipationError = (): void => {
    console.log('erro');
  };

  const createDuelOwnerParticipation = async (
    duelTeamParticipationByDuelParams: IDuelTeamParticipationByDuelParams,
  ): Promise<void> => {
    await createDuelTeamParticipationByDuel(
      OnEducaAPI,
      duelTeamParticipationByDuelParams,
      token,
      createDuelOwnerParticipationSucess,
      createDuelOwnerParticipationError,
    );
  };

  const createDuelSucess = (duel: IDuel): void => {
    loadDuel(duel);
    createDuelOwnerParticipation({ duelId: duel.id, studentId: user.id });
  };

  const createDuelError = (err: AxiosError): void => {
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
            <CancelNewDuelButton to="/duels">
              <CancelNewDuelButtonLabel>Cancelar</CancelNewDuelButtonLabel>
            </CancelNewDuelButton>
            <CreateNewDuelButton onClick={() => createDuel()}>
              <CreateNewDuelButtonLabel>Criar duelo</CreateNewDuelButtonLabel>
            </CreateNewDuelButton>
            {duelIsCreated && <Redirect to={`/duels/${globalDuel.id}`} />}
          </NewDuelActions>
        </NewDuelBox>
      </PageBox>
    </Page>
  );
};

export default NewDuel;
