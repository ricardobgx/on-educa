import React from 'react';
import {
  QuestionDescriptionBox,
  QuestionDescriptionParagraph,
  QuestionDescriptionParagraphs,
} from './styles';

interface IQuestionDescriptionProps {
  description: string;
}

const QuestionDescription = (props: IQuestionDescriptionProps): JSX.Element => {
  const { description } = props;

  return (
    <QuestionDescriptionBox className="with-shadow bd-rd-30">
      <QuestionDescriptionParagraphs>
        {description.split('\n').map((questionDescriptionParagraph) => (
          <QuestionDescriptionParagraph>
            {questionDescriptionParagraph}
          </QuestionDescriptionParagraph>
        ))}
      </QuestionDescriptionParagraphs>
    </QuestionDescriptionBox>
  );
};

export default QuestionDescription;
