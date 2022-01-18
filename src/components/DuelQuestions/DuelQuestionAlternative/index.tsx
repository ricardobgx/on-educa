import React from 'react';
import theme from '../../../global/styles/theme';
import { IAlternative } from '../../../interfaces/IAlternative';
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
      style={{
        borderColor:
          id === selectedAlternative.id ? theme.colors.textColor : '',
        color: id === selectedAlternative.id ? theme.colors.textColor : '',
        fontWeight: id === selectedAlternative.id ? 'bold' : 'normal',
      }}
      onClick={() => setSelectedAlternative(alternative)}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </Container>
  );
};

export default DuelQuestionAlternative;
