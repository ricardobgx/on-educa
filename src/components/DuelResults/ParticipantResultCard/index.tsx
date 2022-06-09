/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isDefaultPeople,
  isDefaultStudent,
} from '../../../functions/entitiesValues';
import { getPeople } from '../../../functions/people';
import { showErrorMessage } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators } from '../../../store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import PeopleCard from '../../App/PeopleCard';
import {
  ParticipantCardBox,
  QuestionAnswered,
  QuestionAnsweredLabel,
  QuestionAnsweredData,
  ParticipantDuelPerformance,
  QuestionsAnswered,
  ParticipantXP,
  ParticipantXPLabel,
  ParticipantXPData,
  QuestionAnsweredHeader,
} from './styles';

interface IParticipantResultCardProps {
  participation: IDuelTeamParticipation;
  token: string;
}

const ParticipantResultCard = (
  props: IParticipantResultCardProps,
): JSX.Element => {
  const { participation, token } = props;
  const student = participation.student || DEFAULT_STUDENT;
  const { duelQuestionsAnswers: duelQuestionsAnswersFound } = participation;
  const { people: studentPeople } = student;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const questionsAnsweredCorrectlyScore = (
    duelQuestionsAnswers: IDuelQuestionAnswer[],
  ): number => {
    let score = 0;

    duelQuestionsAnswers.map((duelQuestionAnswer) => {
      const { question: duelRoundQuestion, selectedAlternative } =
        duelQuestionAnswer;
      const { question } = duelRoundQuestion;

      if (question.rightAlternative.id === selectedAlternative.id) {
        score += 10;
      }

      return duelQuestionAnswer;
    });

    return score;
  };

  const questionsAnsweredWrongScore = (
    duelQuestionsAnswers: IDuelQuestionAnswer[],
  ): number => {
    let score = 0;

    duelQuestionsAnswers.map((duelQuestionAnswer) => {
      const { question: duelRoundQuestion, selectedAlternative } =
        duelQuestionAnswer;
      const { question } = duelRoundQuestion;

      if (question.rightAlternative.id !== selectedAlternative.id) {
        score += 10;
      }

      return duelQuestionAnswer;
    });

    return score;
  };

  const getParticipantPeople = async (): Promise<void> => {
    const peopleFound = await getPeople(
      OnEducaAPI,
      studentPeople.id,
      token,
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
      },
    );

    if (peopleFound) setPeople(peopleFound);
  };

  useEffect(() => {
    if (!isDefaultStudent(student) && isDefaultPeople(people) && token) {
      getParticipantPeople();
    }
  }, [token]);

  const questionCorrectlyScore = questionsAnsweredCorrectlyScore(
    duelQuestionsAnswersFound,
  );
  const questionWrongScore = questionsAnsweredWrongScore(
    duelQuestionsAnswersFound,
  );

  return (
    <ParticipantCardBox className="with-shadow bd-rd-15">
      <PeopleCard
        people={people}
        showScore
        student={student}
        teacher={DEFAULT_TEACHER}
        abbreviateName
        smartphoneNameLength={30}
        otherDevicesNameLength={50}
      />
      <ParticipantDuelPerformance>
        <QuestionsAnswered>
          <QuestionAnswered className="bd-rd-20">
            <QuestionAnsweredHeader>
              <SmallMaterialIconOutlined color="" icon="check_circle" />
              <QuestionAnsweredLabel>Questões corretas</QuestionAnsweredLabel>
            </QuestionAnsweredHeader>
            <QuestionAnsweredData>
              +{questionCorrectlyScore}
            </QuestionAnsweredData>
          </QuestionAnswered>
          <QuestionAnswered className="bd-rd-20">
            <QuestionAnsweredHeader>
              <SmallMaterialIconOutlined color="" icon="cancel" />
              <QuestionAnsweredLabel>Questões erradas</QuestionAnsweredLabel>
            </QuestionAnsweredHeader>
            <QuestionAnsweredData>-{questionWrongScore}</QuestionAnsweredData>
          </QuestionAnswered>
        </QuestionsAnswered>
        <ParticipantXP className="bd-rd-20">
          <ParticipantXPLabel>Total</ParticipantXPLabel>
          <ParticipantXPData>{questionCorrectlyScore}</ParticipantXPData>
        </ParticipantXP>
      </ParticipantDuelPerformance>
    </ParticipantCardBox>
  );
};

export default ParticipantResultCard;
