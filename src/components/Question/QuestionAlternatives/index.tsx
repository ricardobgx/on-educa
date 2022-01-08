import React from 'react';
import { IAlternative } from '../../../interfaces/IAlternative';
import QuestionAlternative from '../QuestionAlternative';
import { QuestionAlternativesListBox } from './styles';

interface IQuestionAlternativesListProps {
  alternatives: IAlternative[];
  selectedAlternative: IAlternative;
  setSelectedAlternative: (alternative: IAlternative) => void;
}

const QuestionAlternativesList = (
  props: IQuestionAlternativesListProps,
): JSX.Element => {
  const { alternatives, selectedAlternative, setSelectedAlternative } = props;

  return (
    <QuestionAlternativesListBox>
      {alternatives.map((alternative) => (
        <QuestionAlternative
          alternative={alternative}
          selectedAlternative={selectedAlternative}
          setSelectedAlternative={setSelectedAlternative}
        />
      ))}
    </QuestionAlternativesListBox>
  );
};

export default QuestionAlternativesList;
