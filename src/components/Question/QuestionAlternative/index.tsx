import React from 'react';
import theme from '../../../global/styles/theme';
import { IAlternative } from '../../../interfaces/IAlternative';
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
      style={{
        background: id === selectedAlternative.id ? theme.colors.textColor : '',
        color: id === selectedAlternative.id ? theme.colors.boxColor : '',
      }}
      onClick={() => setSelectedAlternative(alternative)}
    >
      <QuestionAlternativeLabel>{description}</QuestionAlternativeLabel>
    </QuestionAlternativeBox>
  );
};

export default QuestionAlternative;
