/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouteMatch } from 'react-router-dom';
import analytics from '../../assets/ilustrations/analytics.png';
import { IPracticeQuestion } from '../../interfaces/IPracticeQuestion';
import { ActionCreators, State } from '../../store';
import SectionLabel from '../../components/App/SectionLabel';
import {
  NextContentButton,
  NextContentButtonLabel,
  PageBox,
  PerformanceDataBox,
  PerformanceDetails,
  PerformanceDetailsBox,
  PerformancePageImage,
  PerformancePageImageBox,
  PerformanceType,
  PerformanceTypeBox,
  PracticePerformanceBox,
  PracticePerformanceChartBox,
  TotalLabel,
} from './styles';
import { Page } from '../../global/styles/components/pageComponents';
import { isDefaultAlternative } from '../../functions/entitiesValues';
import PracticePerformanceData from '../../components/PracticePerformance/PracticePerformanceData';
import SimplePieChart, {
  ISimplePieChartData,
} from '../../components/App/Charts/SimplePieChart';
import theme from '../../global/styles/theme';
import { deviceHeight, deviceType, deviceWidth } from '../../functions/utils';
import { DeviceType } from '../../types/deviceType';
import { updateStudentWeekPerformanceValues } from '../../functions/studentWeekPerformance';
import OnEducaAPI from '../../services/api';

interface IPracticePerformanceRouteParams {
  id: string;
}

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

  const { practice, people, aplication } = useSelector((store: State) => store);
  const { questions } = practice;
  const { token } = aplication;

  /* Rota */

  const route = useRouteMatch();
  const { id: contentId } = route.params as IPracticePerformanceRouteParams;

  /* Questions functions */

  // Right Questions

  const rightQuestionsNumber = (
    practiceQuestions: IPracticeQuestion[],
  ): number => {
    return practiceQuestions.filter((practiceQuestion: IPracticeQuestion) => {
      const { selectedAlternative, rightAlternative } = practiceQuestion;

      return (
        selectedAlternative && rightAlternative.id === selectedAlternative.id
      );
    }).length;
  };

  // Wrong Questions

  const wrongQuestionsNumber = (
    practiceQuestions: IPracticeQuestion[],
  ): number => {
    return practiceQuestions.filter((practiceQuestion: IPracticeQuestion) => {
      const { selectedAlternative, rightAlternative } = practiceQuestion;

      return (
        selectedAlternative &&
        !isDefaultAlternative(selectedAlternative) &&
        selectedAlternative.id !== rightAlternative.id
      );
    }).length;
  };

  // Skipped Questions

  const skippedQuestionsNumber = (
    practiceQuestions: IPracticeQuestion[],
  ): number => {
    return practiceQuestions.filter((practiceQuestion: IPracticeQuestion) => {
      const { selectedAlternative } = practiceQuestion;

      return selectedAlternative && isDefaultAlternative(selectedAlternative);
    }).length;
  };

  // All Questions

  const questionsScore = (practiceQuestions: IPracticeQuestion[]): number => {
    return rightQuestionsNumber(practiceQuestions) * 10;
  };

  useEffect((): any => {
    if (people) {
      updateStudentWeekPerformanceValues(
        OnEducaAPI,
        {
          studentId: people.id,
          questionsAnsweredNumber: questions.length,
          rightQuestionsAnsweredNumber: rightQuestionsNumber(questions),
          dailyXPNumber: rightQuestionsNumber(questions) * 10,
          studiedContentsNumber: 1,
        },
        token,
        () => console.log('deu certo'),
        () => console.log('erro'),
      );
    }
    return () => loadQuestions([]);
  }, [people]);

  const rightQuestions = rightQuestionsNumber(questions);
  const wrongQuestions = wrongQuestionsNumber(questions);
  const skippedQuestions = skippedQuestionsNumber(questions);

  const chartData: ISimplePieChartData[] = [
    {
      name: 'Questões corretas',
      value: rightQuestions,
    },
    {
      name: 'Questões erradas',
      value: wrongQuestions,
    },
    {
      name: 'Questões puladas',
      value: skippedQuestions,
    },
  ];

  const screenWidth = deviceWidth();
  const screenHeight = deviceHeight();
  const deviceTypeData = deviceType();

  const calcChartWidth = (): number => {
    if (deviceTypeData !== DeviceType.COMPUTER) {
      return screenWidth - 120;
    }
    return 520;
  };

  const calcChartHeight = (): number => {
    if (deviceTypeData !== DeviceType.COMPUTER) {
      return screenWidth * 0.65;
    }
    return screenHeight - 480;
  };

  return (
    <Page>
      <PageBox>
        <PracticePerformanceBox>
          <PerformancePageImageBox>
            <PerformancePageImage src={analytics} />
          </PerformancePageImageBox>
          <PerformanceDetails>
            <SectionLabel backLink="" label="Desempenho" />
            <PerformanceDetailsBox className="with-shadow bd-rd-5">
              <PracticePerformanceChartBox>
                <SimplePieChart
                  data={chartData}
                  width={calcChartWidth()}
                  height={calcChartHeight()}
                  color="#000000"
                  colors={[
                    theme.similarColors.rightQuestion,
                    theme.similarColors.wrongQuestion,
                    theme.colors.textColor,
                  ]}
                />
              </PracticePerformanceChartBox>
              <PerformanceType>
                <PerformanceTypeBox>
                  <PracticePerformanceData
                    dataLabel="Questões corretas"
                    dataValue={rightQuestions}
                    XPValue={10}
                    color={theme.similarColors.rightQuestion}
                  />
                  <PracticePerformanceData
                    dataLabel="Questões incorretas"
                    dataValue={wrongQuestions}
                    XPValue={0}
                    color={theme.similarColors.wrongQuestion}
                  />
                  <PracticePerformanceData
                    dataLabel="Questões puladas"
                    dataValue={skippedQuestions}
                    XPValue={0}
                    color={theme.colors.textColor}
                  />
                  <PerformanceDataBox>
                    <TotalLabel>Total XP</TotalLabel>
                    <TotalLabel>+ {questionsScore(questions)} XP</TotalLabel>
                  </PerformanceDataBox>
                </PerformanceTypeBox>
              </PerformanceType>
            </PerformanceDetailsBox>
            <NextContentButton to={`/contents/${contentId}`}>
              <NextContentButtonLabel>Próximo conteúdo</NextContentButtonLabel>
            </NextContentButton>
          </PerformanceDetails>
        </PracticePerformanceBox>
      </PageBox>
    </Page>
  );
};

export default PracticePerformance;
