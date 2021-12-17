import React from 'react';
import {
  NewQuestionDescriptionBox,
  NewQuestionDescriptionLabel,
  NewQuestionDescriptionInput,
} from './styles';
import { RequiredField } from '../../../pages/NewContent/styles';

interface INewQuestionDescriptionProps {
  description: string;
  setDescription: (description: string) => void;
}

const NewQuestionDescription = (
  props: INewQuestionDescriptionProps,
): JSX.Element => {
  const { description, setDescription } = props;

  return (
    <NewQuestionDescriptionBox>
      <NewQuestionDescriptionLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewQuestionDescriptionLabel>
      <NewQuestionDescriptionInput
        value={description}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(event.target.value)
        }
      />
    </NewQuestionDescriptionBox>
  );
};

export default NewQuestionDescription;
