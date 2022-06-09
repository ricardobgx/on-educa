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

  const { aplication, teachingType, schoolGrade, subject, unity, content } =
    useSelector((store: RootState) => store);

  const { token, isStudent } = aplication;

  const dispatch = useDispatch();
  const {
    loadTeachingType: setTeachingType,
    loadSchoolGrade: setSchoolGrade,
    loadSubject: setSubject,
    loadUnity: setUnity,
    loadContent: setContent,
    loadQuestion,
    loadPopup,
  } = bindActionCreators(ActionCreators, dispatch);

  /* LocalRootState */

  // References

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  // Actions

  const [questionsFilterIsVisible, setQuestionsFilterIsVisible] =
    useState(false);

  /* Functions */

  const getQuestions = async (): Promise<void> => {
    await getQuestionsByContent(OnEducaAPI, content.id, setQuestions, token);
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
            <QuestionsList
              subject={subject}
              unity={unity}
              content={content}
              questions={questions}
              getQuestions={getQuestions}
              loadQuestion={loadQuestion}
              loadPopup={loadPopup}
            />
          </QuestionsBox>
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Questions;
