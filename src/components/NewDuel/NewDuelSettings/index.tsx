import React from 'react';
import NewDuelSetting from '../NewDuelSetting';
import QuestionsPerContentSetting from '../QuestionsPerContentSetting';
import { NewDuelSettingsBox, NewDuelSettingsLabel } from './styles';

interface INewDuelSettingsProps {
  maxParticipants: number;
  setMaxParticipants: (value: number) => void;
  questionsPerContent: number;
  setQuestionsPerContent: (value: number) => void;
  timeForQuestion: number;
  setTimeForQuestion: (value: number) => void;
  maxParticipantsValues: number[];
  timeForQuestionValues: number[];
}

const NewDuelSettings = (props: INewDuelSettingsProps): JSX.Element => {
  const {
    maxParticipants,
    setMaxParticipants,
    questionsPerContent,
    setQuestionsPerContent,
    timeForQuestion,
    setTimeForQuestion,
    maxParticipantsValues,
    timeForQuestionValues,
  } = props;

  return (
    <NewDuelSettingsBox className="with-shadow bd-rd-30">
      <NewDuelSettingsLabel>Detalhes do duelo</NewDuelSettingsLabel>
      <NewDuelSetting
        label="Participantes por equipe"
        selectedValue={maxParticipants}
        valueLabel="pessoa(s)"
        setSelectedValue={setMaxParticipants}
        values={maxParticipantsValues}
      />
      <QuestionsPerContentSetting
        label="Questões por conteúdo"
        selectedValue={questionsPerContent}
        valueLabel="questões"
        setSelectedValue={setQuestionsPerContent}
        maxParticipants={maxParticipants}
      />
      <NewDuelSetting
        label="Tempo para cada questão"
        selectedValue={timeForQuestion}
        valueLabel="minuto(s)"
        setSelectedValue={setTimeForQuestion}
        values={timeForQuestionValues}
      />
    </NewDuelSettingsBox>
  );
};

export default NewDuelSettings;
