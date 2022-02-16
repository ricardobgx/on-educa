/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import QuestionAlternativesList from '../../components/Question/QuestionAlternatives';
import QuestionDescription from '../../components/Question/QuestionDescription';
import { getQuestion } from '../../functions/question';
import { reduceTextSize } from '../../functions/utils';
import { IAlternative } from '../../interfaces/IAlternative';
import OnEducaAPI from '../../services/api';
import { DEFAULT_ALTERNATIVE } from '../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { Container, PageBox, QuestionDetails } from './styles';

interface IQuestionRouteParams {
  id: string;
}

const Question = (): JSX.Element => {
  /* Estado Global */
  const { question, aplication } = useSelector((store: State) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { loadQuestion } = bindActionCreators(ActionCreators, dispatch);

  /* Estado Local */
  const [selectedAlternative, setSelectedAlternative] =
    useState<IAlternative>(DEFAULT_ALTERNATIVE);

  const { description, alternatives } = question;

  /* Parametros da rota */

  const route = useRouteMatch();
  const { id } = route.params as IQuestionRouteParams;

  useEffect(() => {
    getQuestion(OnEducaAPI, id, token, loadQuestion);
  }, [id]);

  return (
    <Page>
      <PageBox>
        <Container>
          <SectionLabel
            label={reduceTextSize(description, 45, 20)}
            backLink="/questions"
          />
          <QuestionDetails>
            <QuestionDescription description={description} />
            <QuestionAlternativesList
              alternatives={alternatives}
              selectedAlternative={selectedAlternative}
              setSelectedAlternative={setSelectedAlternative}
            />
          </QuestionDetails>
        </Container>
      </PageBox>
    </Page>
  );
};

export default Question;
