/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouteMatch } from 'react-router-dom';
import { ActionCreators, RootState } from '../../store';
import SectionLabel from '../../components/App/SectionLabel';
import {
  NextContentButton,
  NextContentButtonLabel,
  PerformanceDetails,
  PerformanceDetailsBox,
  PerformancePageImageBox,
  PerformanceType,
  PerformanceTypeBox,
  PracticePerformanceBox,
  PracticePerformanceChartBox,
} from './styles';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import { isDefaultAlternative } from '../../functions/entitiesValues';
import PracticePerformanceData from '../../components/PracticePerformance/PracticePerformanceData';
import { ISimplePieChartData } from '../../components/App/Charts/SimplePieChart';
import { deviceHeight, deviceType, deviceWidth } from '../../functions/utils';
import { DeviceType } from '../../types/deviceType';
import { updateStudentWeeklyPerformanceValues } from '../../functions/studentWeeklyPerformance';
import OnEducaAPI from '../../services/api';
import Analytics from '../../svgs/Analytics';
import PieChartWithPaddingAngle from '../../components/App/Charts/PieChartWithPaddingAngle';
import {
  PracticePerformanceDataBox,
  PracticePerformanceDataHeader,
  PracticePerformanceDataLabel,
  PracticePerformanceDataValue,
} from '../../components/PracticePerformance/PracticePerformanceData/styles';
import { SmallMaterialIconOutlined } from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';

interface IPracticePerformanceRouteParams {
  id: string;
}

const PracticePerformance = (): JSX.Element => {
  /* GlobalRootState */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadPracticeQuestions: loadQuestions } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // RootState

  const { practice, people, aplication, student, theme } = useSelector(
    (store: RootState) => store,
  );
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
      updateStudentWeeklyPerformanceValues(
        OnEducaAPI,
        {
          studentId: student.id,
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
      name: 'Questões incorretas',
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
    if (deviceTypeData === DeviceType.SMARTPHONE) {
      return screenWidth * 0.35;
    }
    if (deviceTypeData === DeviceType.TABLET) {
      return screenWidth / 4.5;
    }
    return screenHeight / 5;
  };

  return (
    <Page>
      <PageBoxColumn>
        <PracticePerformanceBox>
          <PerformancePageImageBox>
            <Analytics fill={theme.colors.mainColor} />
          </PerformancePageImageBox>
          <PerformanceDetails>
            <SectionLabel backLink="" label="Desempenho" />
            <PerformanceDetailsBox className="with-shadow bd-rd-30">
              <PracticePerformanceChartBox>
                <PieChartWithPaddingAngle
                  data={chartData}
                  width={calcChartWidth()}
                  height={calcChartHeight()}
                  fill="#000000"
                  colors={[
                    theme.flagColors.greenColor,
                    theme.flagColors.redColor,
                    theme.flagColors.yellowColor,
                  ]}
                />
              </PracticePerformanceChartBox>
              <PerformanceType>
                <PerformanceTypeBox>
                  <PracticePerformanceData
                    dataLabel="Questões corretas"
                    dataValue={rightQuestions}
                    XPValue={10}
                    performanceType="right"
                  />
                  <PracticePerformanceData
                    dataLabel="Questões incorretas"
                    dataValue={wrongQuestions}
                    XPValue={0}
                    performanceType="wrong"
                  />
                  <PracticePerformanceData
                    dataLabel="Questões puladas"
                    dataValue={skippedQuestions}
                    XPValue={0}
                    performanceType="skipped"
                  />
                  <PracticePerformanceDataBox className="bd-rd-30 total">
                    <PracticePerformanceDataHeader>
                      <SmallMaterialIconOutlined icon="data_usage" color="" />
                      <PracticePerformanceDataLabel>
                        Total
                      </PracticePerformanceDataLabel>
                    </PracticePerformanceDataHeader>
                    <PracticePerformanceDataValue>
                      + {questionsScore(questions)} XP
                    </PracticePerformanceDataValue>
                  </PracticePerformanceDataBox>
                </PerformanceTypeBox>
              </PerformanceType>
            </PerformanceDetailsBox>
            <NextContentButton
              className="block-shadow-button main-action bd-rd-20"
              to={`/contents/${contentId}`}
            >
              <NextContentButtonLabel>Próximo conteúdo</NextContentButtonLabel>
            </NextContentButton>
          </PerformanceDetails>
        </PracticePerformanceBox>
      </PageBoxColumn>
    </Page>
  );
};

export default PracticePerformance;
