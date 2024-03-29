import React, { useState } from 'react';
import { createDoubt } from '../../../functions/doubt';
import OnEducaAPI from '../../../services/api';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import { NewDoubtBox, NewDoubtInput, NewDoubtButton } from './styles';

interface INewDoubtProps {
  studentId: string;
  contentId: string;
  token: string;
  newDoubtAdded: (value: IDoubt) => void;
}

const NewDoubt = (props: INewDoubtProps): JSX.Element => {
  const { studentId, contentId, token, newDoubtAdded } = props;

  const [description, setDescription] = useState<string>('');

  const createDoubtAction = (): void => {
    if (!description.trim()) {
      return;
    }

    createDoubt(
      OnEducaAPI,
      { studentId, contentId, description },
      token,
      (doubt: IDoubt) => {
        setDescription('');
        newDoubtAdded(doubt);
      },
    );
  };

  return (
    <NewDoubtBox>
      <NewDoubtInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escreva sua dúvida"
        className="bd-rd-20"
      />
      <NewDoubtButton
        className="block-shadow-button main-action bd-rd-20"
        onClick={() => createDoubtAction()}
      >
        <SmallMaterialIconOutlined color="" icon="send" />
      </NewDoubtButton>
    </NewDoubtBox>
  );
};

export default NewDoubt;
