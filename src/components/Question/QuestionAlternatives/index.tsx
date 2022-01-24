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
  const {
    alternatives: unsortedAlternatives,
    selectedAlternative,
    setSelectedAlternative,
  } = props;
  const alternatives = unsortedAlternatives.sort(
    (alternativeA: IAlternative, alternativeB: IAlternative): number => {
      if (alternativeA.index > alternativeB.index) {
        return 1;
      }
      if (alternativeA.index < alternativeB.index) {
        return -1;
      }
      return 0;
    },
  );

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
