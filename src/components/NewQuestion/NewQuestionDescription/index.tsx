import React from 'react';
import {
  NewQuestionDescriptionBox,
  NewQuestionDescriptionInput,
} from './styles';
import { RequiredField } from '../../../pages/NewContent/styles';
import { NewQuestionBoxLabel } from '../../../pages/NewQuestion/styles';

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
      <NewQuestionBoxLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewQuestionBoxLabel>
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
