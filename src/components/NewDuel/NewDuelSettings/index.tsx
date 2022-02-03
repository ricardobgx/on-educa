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
}

const NewDuelSettings = (props: INewDuelSettingsProps): JSX.Element => {
  const {
    maxParticipants,
    setMaxParticipants,
    questionsPerContent,
    setQuestionsPerContent,
    timeForQuestion,
    setTimeForQuestion,
  } = props;

  return (
    <NewDuelSettingsBox className="with-shadow bd-rd-5">
      <NewDuelSettingsLabel>Detalhes do duelo</NewDuelSettingsLabel>
      <NewDuelSetting
        label="Participantes por equipe"
        selectedValue={maxParticipants}
        valueLabel="pessoa(s)"
        setSelectedValue={setMaxParticipants}
        values={[1, 2, 4]}
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
        values={[1, 3, 5]}
      />
    </NewDuelSettingsBox>
  );
};

export default NewDuelSettings;
