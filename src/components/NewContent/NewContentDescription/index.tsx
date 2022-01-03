import React from 'react';
import { NewContentDescriptionBox, NewContentDescriptionInput } from './styles';
import {
  RequiredField,
  NewContentBoxLabel,
} from '../../../pages/NewContent/styles';

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
      <NewContentBoxLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewContentBoxLabel>
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
