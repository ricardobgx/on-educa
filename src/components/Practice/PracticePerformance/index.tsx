/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import bookLover from '../../../assets/ilustrations/undraw_book_lover_mkck.svg';
import { IDuelQuestion } from '../../../interfaces/IDuelQuestion';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../../store';
import SectionLabel from '../../App/SectionLabel';
import {
  Container,
  NewContentLabel,
  NextContentButton,
  NextContentButtonLabel,
  PerformanceDataBox,
  PerformanceDetails,
  PerformanceDetailsBox,
  PerformancePageImage,
  PerformanceType,
  PerformanceTypeBox,
  PerformanceTypeLabel,
  RightQuestionsLabel,
  SkippedQuestionsLabel,
  TotalLabel,
  WrongQuestionsLabel,
} from './styles';

const PracticePerformance = (): JSX.Element => {
  /* Global State */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadPracticeQuestions: loadQuestions } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // State

  const practice = useSelector((store: State) => store.practice);
  const { questions } = practice;

  /* Content functions */

  const isNewContent = (): boolean => {
    return true;
  };

  const contentScore = (): number => {
    return isNewContent() ? 10 : 0;
  };

  /* Questions functions */

  // Right Questions

  const rightQuestionsNumber = (practiceQuestions: IDuelQuestion[]): number => {
    return practiceQuestions.filter((duelQuestion: IDuelQuestion) => {
      const { question, duelQuestionAnswer } = duelQuestion;
      const rightAlternative = question.rightAlternative || DEFAULT_ALTERNATIVE;

      return rightAlternative.id === duelQuestionAnswer?.selectedAlternative.id;
    }).length;
  };

  // Wrong Questions

  const wrongQuestionsNumber = (practiceQuestions: IDuelQuestion[]): number => {
    return practiceQuestions.filter((duelQuestion: IDuelQuestion) => {
      const { question, duelQuestionAnswer } = duelQuestion;
      const rightAlternative = question.rightAlternative || DEFAULT_ALTERNATIVE;

      return (
        !!duelQuestionAnswer?.selectedAlternative &&
        duelQuestionAnswer?.selectedAlternative.id !== rightAlternative.id
      );
    }).length;
  };

  // Skipped Questions

  const skippedQuestionsNumber = (
    practiceQuestions: IDuelQuestion[],
  ): number => {
    return practiceQuestions.filter((duelQuestion: IDuelQuestion) => {
      const { duelQuestionAnswer } = duelQuestion;
      return !!duelQuestionAnswer?.selectedAlternative;
    }).length;
  };

  // All Questions

  const questionsScore = (practiceQuestions: IDuelQuestion[]): number => {
    return rightQuestionsNumber(practiceQuestions) * 10;
  };

  /* General functions */

  const practiceScore = (): number => {
    return contentScore() + questionsScore(questions);
  };

  useEffect((): any => {
    return () => loadQuestions([]);
  }, []);

  return (
    <Container>
      <PerformancePageImage src={bookLover} />
      <PerformanceDetails>
        <SectionLabel backLink="" label="Desempenho" />
        <PerformanceDetailsBox>
          <PerformanceType>
            <PerformanceTypeLabel>Pontuação - Conteúdo</PerformanceTypeLabel>
            <PerformanceTypeBox>
              <PerformanceDataBox>
                <NewContentLabel>Novo conteúdo</NewContentLabel>
                <NewContentLabel>10 XP</NewContentLabel>
              </PerformanceDataBox>
              <PerformanceDataBox>
                <TotalLabel>Total XP</TotalLabel>
                <TotalLabel>+ 10 XP</TotalLabel>
              </PerformanceDataBox>
            </PerformanceTypeBox>
          </PerformanceType>
          <PerformanceType>
            <PerformanceTypeLabel>Pontuação - Questões</PerformanceTypeLabel>
            <PerformanceTypeBox>
              <PerformanceDataBox>
                <RightQuestionsLabel>Questões corretas</RightQuestionsLabel>
                <RightQuestionsLabel>
                  {rightQuestionsNumber(questions)} x 10 XP
                </RightQuestionsLabel>
              </PerformanceDataBox>
              <PerformanceDataBox>
                <WrongQuestionsLabel>Questões incorretas</WrongQuestionsLabel>
                <WrongQuestionsLabel>
                  {wrongQuestionsNumber(questions)} x 0 XP
                </WrongQuestionsLabel>
              </PerformanceDataBox>
              <PerformanceDataBox>
                <SkippedQuestionsLabel>Questões puladas</SkippedQuestionsLabel>
                <SkippedQuestionsLabel>
                  {skippedQuestionsNumber(questions)} x 0 XP
                </SkippedQuestionsLabel>
              </PerformanceDataBox>
              <PerformanceDataBox>
                <TotalLabel>Total XP</TotalLabel>
                <TotalLabel>+ {questionsScore(questions)} XP</TotalLabel>
              </PerformanceDataBox>
            </PerformanceTypeBox>
          </PerformanceType>
          <PerformanceDataBox>
            <TotalLabel>Total XP</TotalLabel>
            <TotalLabel>+ {practiceScore()} XP</TotalLabel>
          </PerformanceDataBox>
        </PerformanceDetailsBox>
        <NextContentButton to="/contents/123456">
          <NextContentButtonLabel>Próximo conteúdo</NextContentButtonLabel>
        </NextContentButton>
      </PerformanceDetails>
    </Container>
  );
};

export default PracticePerformance;
