import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
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

  const { theme } = useSelector((store: RootState) => store);

  return (
    <Container
      className="with-shadow bd-rd-20"
      style={{
        background:
          id === selectedAlternative.id
            ? theme.colors.textColors.primaryColor
            : '',
        color: id === selectedAlternative.id ? theme.colors.boxColor : '',
      }}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </Container>
  );
};

export default NoActionDuelQuestionAlternative;
