import React from 'react';
import {
  RequiredField,
  NewContentBoxLabel,
} from '../../../pages/NewContent/styles';
import { NameInput, NewContentNameBox } from './styles';

interface INewContentNameProps {
  title: string;
  setTitle: (title: string) => void;
}

const NewContentName = (props: INewContentNameProps): JSX.Element => {
  const { title, setTitle } = props;

  return (
    <NewContentNameBox>
      <NewContentBoxLabel>
        Nome do conteúdo<RequiredField>*</RequiredField>
      </NewContentBoxLabel>
      <NameInput
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
        type="text"
      />
    </NewContentNameBox>
  );
};

export default NewContentName;
