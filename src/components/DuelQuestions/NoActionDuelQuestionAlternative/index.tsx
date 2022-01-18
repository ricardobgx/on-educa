import React from 'react';
import theme from '../../../global/styles/theme';
import { IAlternative } from '../../../interfaces/IAlternative';
import { Container, QuestionAlternativeLabel } from './styles';

interface INoActionDuelQuestionAlternativeProps {
  alternative: IAlternative;
  selectedAlternative: IAlternative;
}

const NoActionDuelQuestionAlternative = (
  props: INoActionDuelQuestionAlternativeProps,
): JSX.Element => {
  const { alternative, selectedAlternative } = props;

  const { id, description } = alternative;

  return (
    <Container
      style={{
        background: id === selectedAlternative.id ? theme.colors.textColor : '',
        color: id === selectedAlternative.id ? theme.colors.boxColor : '',
      }}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </Container>
  );
};

export default NoActionDuelQuestionAlternative;
