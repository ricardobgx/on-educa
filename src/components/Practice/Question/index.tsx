import React, { useState } from 'react';
import { IQuestion } from '../../../interfaces/practice';
import QuestionAlternative from '../QuestionAlternative';
import {
  AnswerButton,
  AnswerButtonLabel,
  Container,
  QuestionActions,
  QuestionAlternatives,
  QuestionDescription,
  QuestionDescriptionBox,
  QuestionDescriptionParagraph,
  SkipButton,
  SkipButtonLabel,
} from './styles';

interface IQuestionProps {
  answerQuestion: (
    practiceQuestions: IQuestion[],
    practiceQuestionIndex: number,
    selectedAlternative: string,
  ) => void;
  question: IQuestion;
  questions: IQuestion[];
  questionIndex: number;
}

const Question = (props: IQuestionProps): JSX.Element => {
  const { answerQuestion, question, questions, questionIndex } = props;
  const [selectedAlternative, setSelectedAlternative] = useState('');

  const { description, alternatives } = question;

  return (
    <Container>
      <QuestionDescriptionBox>
        <QuestionDescription>
          {description.split('\n').map((questionDescriptionParagraph) => (
            <QuestionDescriptionParagraph>
              {questionDescriptionParagraph}
            </QuestionDescriptionParagraph>
          ))}
        </QuestionDescription>
      </QuestionDescriptionBox>
      <QuestionAlternatives>
        {alternatives.map((alternative) => (
          <QuestionAlternative
            description={alternative.description}
            id={alternative.id}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
          />
        ))}
      </QuestionAlternatives>
      <QuestionActions>
        <AnswerButton
          onClick={() => {
            if (selectedAlternative !== '') {
              answerQuestion(questions, questionIndex, selectedAlternative);
              setSelectedAlternative('');
            }
          }}
        >
          <AnswerButtonLabel>Responder</AnswerButtonLabel>
        </AnswerButton>
        <SkipButton
          onClick={() => {
            answerQuestion(questions, questionIndex, 'skipped');
            setSelectedAlternative('');
          }}
        >
          <SkipButtonLabel>Pular</SkipButtonLabel>
        </SkipButton>
      </QuestionActions>
    </Container>
  );
};

export default Question;
