import { AxiosInstance } from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IUnity } from '../../../interfaces/IUnity';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import {
  NewUnityBackground,
  NewUnityBox,
  CloseNewUnityButton,
  CloseNewUnityIcon,
  NewUnityLabel,
  NewUnityInput,
  CreateUnityButton,
  CreateUnityButtonLabel,
} from './styles';

interface INewUnityProps {
  setNewUnityIsVisible: (value: boolean) => void;
  getUnits: (
    API: AxiosInstance,
    setUnitsState: (value: IUnity[]) => void,
  ) => void;
  setUnits: (value: IUnity[]) => void;
}

const NewUnity = (props: INewUnityProps): JSX.Element => {
  /* Props */

  const { setNewUnityIsVisible, getUnits, setUnits } = props;

  /* Local State */

  const [title, setTitle] = useState('');

  /* Global State */

  const { subject, aplication } = useSelector((store: State) => store);

  const { token } = aplication;

  const createUnity = async (): Promise<void> => {
    await OnEducaAPI.post(
      '/units',
      {
        title,
        subjectId: subject.id,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    ).then(() => {
      getUnits(OnEducaAPI, setUnits);
      setNewUnityIsVisible(false);
    });
  };

  return (
    <NewUnityBackground>
      <NewUnityBox>
        <CloseNewUnityButton onClick={() => setNewUnityIsVisible(false)}>
          <CloseNewUnityIcon className="fas fa-times" />
        </CloseNewUnityButton>
        <NewUnityLabel>Nova unidade</NewUnityLabel>
        <NewUnityInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Título da unidade"
        />
        <CreateUnityButton onClick={() => createUnity()}>
          <CreateUnityButtonLabel>Criar unidade</CreateUnityButtonLabel>
        </CreateUnityButton>
      </NewUnityBox>
    </NewUnityBackground>
  );
};

export default NewUnity;
