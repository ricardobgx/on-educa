import React from 'react';
import { NewContentDescriptionBox, NewContentDescriptionInput } from './styles';
import { NewContentBoxLabel } from '../../../pages/NewContent/styles';
import { RequiredField } from '../../../global/styles/components/textComponents';

interface INewContentDescriptionProps {
  description: string;
  setDescription: (Description: string) => void;
}

const NewContentDescription = (
  props: INewContentDescriptionProps,
): JSX.Element => {
  const { description, setDescription } = props;

  return (
    <NewContentDescriptionBox className="bd-rd-20 with-shadow">
      <NewContentBoxLabel>
        Descrição<RequiredField>*</RequiredField>
      </NewContentBoxLabel>
      <NewContentDescriptionInput
        value={description}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(event.target.value)
        }
        className="bd-rd-15"
      />
    </NewContentDescriptionBox>
  );
};

export default NewContentDescription;
