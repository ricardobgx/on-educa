import React from 'react';
import {
  NewContentDescriptionBox,
  NewContentDescriptionLabel,
  NewContentDescriptionInput,
} from './styles';
import { RequiredField } from '../../../pages/NewContent/styles';

interface INewContentDescriptionProps {
  description: string;
  setDescription: (Description: string) => void;
}

const NewContentDescription = (
  props: INewContentDescriptionProps,
): JSX.Element => {
  const { description, setDescription } = props;

  return (
    <NewContentDescriptionBox>
      <NewContentDescriptionLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewContentDescriptionLabel>
      <NewContentDescriptionInput
        value={description}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(event.target.value)
        }
      />
    </NewContentDescriptionBox>
  );
};

export default NewContentDescription;
