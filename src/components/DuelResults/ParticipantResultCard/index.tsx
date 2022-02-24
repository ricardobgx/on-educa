import React, { useEffect, useState } from 'react';
import {
  isDefaultPeople,
  isDefaultStudent,
} from '../../../functions/entitiesValues';
import { getPeople } from '../../../functions/people';
import { IDuelQuestionAnswer } from '../../../interfaces/IDuelQuestionAnswer';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import PeopleCard from '../../App/PeopleCard';
import {
  ParticipantCardBox,
  QuestionAnswered,
  QuestionAnsweredLabel,
  QuestionAnsweredData,
  ParticipantDuelPerformance,
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

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const leagueColor = (): string => {
    return '#43DDF2';
  };

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

  useEffect(() => {
    if (!isDefaultStudent(student) && isDefaultPeople(people) && token) {
      getPeople(OnEducaAPI, studentPeople.id, setPeople, token);
    }
  }, [token]);

  const questionCorrectlyScore = questionsAnsweredCorrectlyScore(
    duelQuestionsAnswersFound,
  );
  const questionWrongScore = questionsAnsweredWrongScore(
    duelQuestionsAnswersFound,
  );

  return (
    <ParticipantCardBox>
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
        <QuestionAnswered>
          <QuestionAnsweredLabel>Questões corretas</QuestionAnsweredLabel>
          <QuestionAnsweredData>+{questionCorrectlyScore}</QuestionAnsweredData>
        </QuestionAnswered>
        <QuestionAnswered>
          <QuestionAnsweredLabel>Questões erradas</QuestionAnsweredLabel>
          <QuestionAnsweredData>-{questionWrongScore}</QuestionAnsweredData>
        </QuestionAnswered>
        <QuestionAnswered>
          <QuestionAnsweredLabel>Total</QuestionAnsweredLabel>
          <QuestionAnsweredData>{questionCorrectlyScore}</QuestionAnsweredData>
        </QuestionAnswered>
      </ParticipantDuelPerformance>
    </ParticipantCardBox>
  );
};

export default ParticipantResultCard;
