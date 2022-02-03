import React from 'react';
import theme from '../../../global/styles/theme';
import { Container, QuestionAlternativeLabel } from './styles';

interface IQuestionAlternativeProps {
  description: string;
  id: string;
  selectedAlternative: string;
  setSelectedAlternative: (value: string) => void;
}

const QuestionAlternative = (props: IQuestionAlternativeProps): JSX.Element => {
  const { description, id, selectedAlternative, setSelectedAlternative } =
    props;

  return (
    <Container
      style={{
        borderColor: id === selectedAlternative ? theme.colors.textColor : '',
        color: id === selectedAlternative ? theme.colors.boxColor : '',
      }}
      onClick={() => setSelectedAlternative(id)}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </Container>
  );
};

export default QuestionAlternative;
