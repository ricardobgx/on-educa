/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteSupplies from '../../components/App/Supplies/DeleteSupplies';
import SectionLabel from '../../components/App/SectionLabel';
import QuestionsActions from '../../components/Questions/QuestionsActions';
import QuestionsList from '../../components/Questions/QuestionsList';
import {
  deleteQuestion as deleteQuestionData,
  getQuestionsByContent,
} from '../../functions/question';
import { IQuestion } from '../../interfaces/IQuestion';
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_CONTENT,
  DEFAULT_QUESTION,
} from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../components';
import { PageBox, QuestionsBox } from './styles';
import { IContent } from '../../interfaces/IContent';
import QuestionsFilter from '../../components/Questions/QuestionsFilter';
import { ITeachingType } from '../../interfaces/ITeachingType';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { ISubject } from '../../interfaces/ISubject';
import { IUnity } from '../../interfaces/IUnity';

export interface ICommonQuestionProps {
  getQuestions: () => void;
}

const Questions = (): JSX.Element => {
  /* Global State */

  const {
    aplication,
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
  } = useSelector((store: State) => store);

  const { token, userType } = aplication;

  /* Local State */

  // References

  const [teachingType, setTeachingType] =
    useState<ITeachingType>(globalTeachingType);
  const [schoolGrade, setSchoolGrade] =
    useState<ISchoolGrade>(globalSchoolGrade);
  const [subject, setSubject] = useState<ISubject>(globalSubject);
  const [unity, setUnity] = useState<IUnity>(globalUnity);
  const [content, setContent] = useState<IContent>(globalContent);
  const [question, setQuestion] = useState<IQuestion>(DEFAULT_QUESTION);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const [deleteQuestionIsVisible, setDeleteQuestionIsVisible] = useState(false);

  // Actions

  const [questionsFilterIsVisible, setQuestionsFilterIsVisible] =
    useState(false);

  /* Functions */

  const getQuestions = async (): Promise<void> => {
    await getQuestionsByContent(OnEducaAPI, content.id, setQuestions, token);
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
    if (content === DEFAULT_CONTENT) setQuestions([]);
    else getQuestions();
  }, [content]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Questões" />
        <QuestionsBox>
          <QuestionsActions
            userType={userType}
            setQuestionsFilterIsVisible={setQuestionsFilterIsVisible}
          />
          {questionsFilterIsVisible && (
            <QuestionsFilter
              teachingType={teachingType}
              setTeachingType={setTeachingType}
              schoolGrade={schoolGrade}
              setSchoolGrade={setSchoolGrade}
              subject={subject}
              setSubject={setSubject}
              unity={unity}
              setUnity={setUnity}
              content={content}
              setContent={setContent}
              setQuestionsFilterIsVisible={setQuestionsFilterIsVisible}
            />
          )}
          {deleteQuestionIsVisible && (
            <DeleteSupplies
              suppliesLabel={question.description}
              suppliesType="questão"
              deleteSupplies={deleteQuestion}
              setDeleteSuppliesIsVisible={setDeleteQuestionIsVisible}
            />
          )}
          <QuestionsList
            subject={subject}
            unity={unity}
            content={content}
            question={question}
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
