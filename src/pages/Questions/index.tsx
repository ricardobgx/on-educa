/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeleteSupplies from '../../components/App/Supplies/DeleteSupplies';
import SectionLabel from '../../components/App/SectionLabel';
import QuestionsActions from '../../components/Questions/QuestionsActions';
import QuestionsList from '../../components/Questions/QuestionsList';
import {
  deleteQuestion as deleteQuestionData,
  getQuestionsByContent,
} from '../../functions/question';
import OnEducaAPI from '../../services/api';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, QuestionsBox } from './styles';
import QuestionsFilter from '../../components/Questions/QuestionsFilter';
import { isDefaultContent } from '../../functions/entitiesValues';
import { SuppliesBox } from '../../components/App/Supplies/styles';

export interface ICommonQuestionProps {
  getQuestions: () => void;
}

const Questions = (): JSX.Element => {
  /* GlobalRootState */

  const {
    aplication,
    teachingType,
    schoolGrade,
    subject,
    unity,
    content,
    question,
  } = useSelector((store: RootState) => store);

  const { token, isStudent } = aplication;

  const dispatch = useDispatch();
  const {
    loadTeachingType: setTeachingType,
    loadSchoolGrade: setSchoolGrade,
    loadSubject: setSubject,
    loadUnity: setUnity,
    loadContent: setContent,
    loadQuestion: setQuestion,
  } = bindActionCreators(ActionCreators, dispatch);

  /* LocalRootState */

  // References

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
    if (isDefaultContent(content)) {
      setQuestions([]);
    } else {
      getQuestions();
    }
  }, [content]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/" label="Questões" />
        <SuppliesBox>
          <QuestionsBox>
            <QuestionsActions
              isStudent={isStudent}
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
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Questions;
