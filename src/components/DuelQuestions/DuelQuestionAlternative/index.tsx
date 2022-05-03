import React from 'react';
import { Container, QuestionAlternativeLabel } from './styles';

interface IDuelQuestionAlternativeProps {
  alternative: IAlternative;
  selectedAlternative: IAlternative;
  setSelectedAlternative: (value: IAlternative) => void;
}

const DuelQuestionAlternative = (
  props: IDuelQuestionAlternativeProps,
): JSX.Element => {
  const { alternative, selectedAlternative, setSelectedAlternative } = props;

  const { id, description } = alternative;

  return (
    <Container
      className={`block-shadow-button secondary-action bd-rd-30 ${
        id === selectedAlternative.id ? 'selected' : ''
      }`}
      onClick={() => setSelectedAlternative(alternative)}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </Container>
  );
};

export default DuelQuestionAlternative;
