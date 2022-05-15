/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import ParticipantsResultList from '../ParticipantsResultList';
import {
  DuelTeamResultBox,
  DuelTeamResultLabel,
  DuelTeamResultParticipants,
  DuelTeamResultParticipantsBox,
  DuelTeamResultTotalBox,
  DuelTeamResultTotalLabel,
} from './styles';

interface IDuelTeamResultProps {
  team: IDuelTeam;
}

const DuelTeamResult = (props: IDuelTeamResultProps): JSX.Element => {
  const { team } = props;
  const [total, setTotal] = useState(0);

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

  const teamScore = (teamData: IDuelTeam): number => {
    let score = 0;

    teamData.participations.map((participation) => {
      const { duelQuestionsAnswers } = participation;
      score += questionsAnsweredCorrectlyScore(duelQuestionsAnswers);

      return participation;
    });

    return score;
  };

  useEffect(() => {
    setTotal(teamScore(team));
  }, [team]);

  return (
    <DuelTeamResultBox className="with-shadow bd-rd-30">
      <DuelTeamResultLabel>{team.name}</DuelTeamResultLabel>
      <DuelTeamResultParticipants>
        <DuelTeamResultParticipantsBox>
          <ParticipantsResultList participations={team.participations} />
        </DuelTeamResultParticipantsBox>
      </DuelTeamResultParticipants>
      <DuelTeamResultTotalBox>
        <DuelTeamResultTotalLabel>Total XP</DuelTeamResultTotalLabel>
        <DuelTeamResultTotalLabel>+ {total} XP</DuelTeamResultTotalLabel>
      </DuelTeamResultTotalBox>
    </DuelTeamResultBox>
  );
};

export default DuelTeamResult;
