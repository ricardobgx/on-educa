import React from 'react';
import { QuestionAlternativeBox, QuestionAlternativeLabel } from './styles';

interface IQuestionAlternativeProps {
  alternative: IAlternative;
  selectedAlternative: IAlternative;
  setSelectedAlternative: (value: IAlternative) => void;
}

const QuestionAlternative = (props: IQuestionAlternativeProps): JSX.Element => {
  const { alternative, selectedAlternative, setSelectedAlternative } = props;

  const { id, description } = alternative;

  return (
    <QuestionAlternativeBox
      className={`block-shadow-button secondary-action bd-rd-20 ${
        id === selectedAlternative.id ? 'selected' : ''
      }`}
      onClick={() => setSelectedAlternative(alternative)}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </QuestionAlternativeBox>
  );
};

export default QuestionAlternative;
