/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteSupplies from '../../components/App/DeleteSupplies';
import SectionLabel from '../../components/App/SectionLabel';
import QuestionsActions from '../../components/Questions/QuestionsActions';
import QuestionsList from '../../components/Questions/QuestionsList';
import {
  getQuestionsByUnity,
  deleteQuestion as deleteQuestionData,
} from '../../functions/question';
import { IQuestion } from '../../interfaces/IQuestion';
import OnEducaAPI from '../../services/api';
import { DEFAULT_QUESTION } from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../components';
import { PageBox, QuestionsBox } from './styles';

export interface ICommonQuestionProps {
  getQuestions: () => void;
}

const Questions = (): JSX.Element => {
  /* Global State */

  const { unity, subject, aplication } = useSelector((store: State) => store);
  const { userType, token } = aplication;

  /* Local State */

  const [question, setQuestion] = useState<IQuestion>(DEFAULT_QUESTION);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const [deleteQuestionIsVisible, setDeleteQuestionIsVisible] = useState(false);

  /* Functions */

  const getQuestions = async (): Promise<void> => {
    await getQuestionsByUnity(OnEducaAPI, unity.Id, setQuestions, token);
  };

  const deleteQuestionSucess = (): void => {
    getQuestions();
    setDeleteQuestionIsVisible(false);
  };

  const deleteQuestionError = (): void => {
    console.log('erro');
  };

  const deleteQuestion = async (): Promise<void> => {
    deleteQuestionData(
      OnEducaAPI,
      question.id,
      token,
      deleteQuestionSucess,
      deleteQuestionError,
    );
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Questões" />
        <QuestionsBox>
          <QuestionsActions userType={userType} />
          {deleteQuestionIsVisible && (
            <DeleteSupplies
              suppliesLabel={question.description}
              suppliesType="questão"
              deleteSupplies={deleteQuestion}
              setDeleteSuppliesIsVisible={setDeleteQuestionIsVisible}
            />
          )}
          <QuestionsList
            questions={questions}
            getQuestions={getQuestions}
            setQuestion={setQuestion}
            setDeleteQuestionIsVisible={setDeleteQuestionIsVisible}
          />
        </QuestionsBox>
      </PageBox>
    </Page>
  );
};

export default Questions;
