import React from 'react';
import { RequiredField } from '../../../global/styles/components/textComponents';
import { NewContentBoxLabel } from '../../../pages/NewContent/styles';
import { NameInput, NewContentNameBox } from './styles';

interface INewContentNameProps {
  name: string;
  setName: (name: string) => void;
}

const NewContentName = (props: INewContentNameProps): JSX.Element => {
  const { name, setName } = props;

  return (
    <NewContentNameBox className="bd-rd-20 with-shadow">
      <NewContentBoxLabel>
        Nome do conteúdo<RequiredField>*</RequiredField>
      </NewContentBoxLabel>
      <NameInput
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
        type="text"
        className="bd-rd-20"
      />
    </NewContentNameBox>
  );
};

export default NewContentName;
