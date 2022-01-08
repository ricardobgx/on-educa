import React from 'react';
import { RequiredField } from '../../../global/styles/components/textComponents';
import { NewQuestionBoxLabel } from '../../../pages/NewQuestion/styles';
import {
  NewQuestionDifficultyBox,
  NewQuestionDifficultyOption,
  NewQuestionDifficultySelect,
} from './styles';

interface INewQuestionDifficultyProps {
  selectedDifficulty: number;
  setSelectedDifficulty: (difficulty: number) => void;
}

const NewQuestionDifficulty = (
  props: INewQuestionDifficultyProps,
): JSX.Element => {
  const { selectedDifficulty, setSelectedDifficulty } = props;

  return (
    <NewQuestionDifficultyBox>
      <NewQuestionBoxLabel>
        Dificuldade<RequiredField>*</RequiredField>
      </NewQuestionBoxLabel>
      <NewQuestionDifficultySelect
        value={selectedDifficulty}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedDifficulty(Number(event.target.value))
        }
      >
        <NewQuestionDifficultyOption value={1}>
          Fácil
        </NewQuestionDifficultyOption>
        <NewQuestionDifficultyOption value={2}>
          Média
        </NewQuestionDifficultyOption>
        <NewQuestionDifficultyOption value={3}>
          Difícil
        </NewQuestionDifficultyOption>
      </NewQuestionDifficultySelect>
    </NewQuestionDifficultyBox>
  );
};

export default NewQuestionDifficulty;
