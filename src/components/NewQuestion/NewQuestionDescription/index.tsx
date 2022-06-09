import React from 'react';
import {
  NewQuestionDescriptionBox,
  NewQuestionDescriptionInput,
} from './styles';
import { NewQuestionBoxLabel } from '../../../pages/NewQuestion/styles';
import { RequiredField } from '../../../global/styles/components/textComponents';

interface INewQuestionDescriptionProps {
  description: string;
  setDescription: (description: string) => void;
}

const NewQuestionDescription = (
  props: INewQuestionDescriptionProps,
): JSX.Element => {
  const { description, setDescription } = props;

  return (
    <NewQuestionDescriptionBox className="with-shadow bd-rd-20">
      <NewQuestionBoxLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewQuestionBoxLabel>
      <NewQuestionDescriptionInput
        className="bd-rd-15"
        spellCheck={false}
        value={description}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(event.target.value)
        }
      />
    </NewQuestionDescriptionBox>
  );
};

export default NewQuestionDescription;
