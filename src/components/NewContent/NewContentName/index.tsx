import React from 'react';
import { RequiredField } from '../../../pages/NewContent/styles';
import { NameInput, NameLabel, NewContentNameBox } from './styles';

interface INewContentNameProps {
  title: string;
  setTitle: (title: string) => void;
}

const NewContentName = (props: INewContentNameProps): JSX.Element => {
  const { title, setTitle } = props;

  return (
    <NewContentNameBox>
      <NameLabel>
        Nome do conteúdo<RequiredField>*</RequiredField>
      </NameLabel>
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
