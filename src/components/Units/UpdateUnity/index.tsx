import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateUnity as updateUnityData } from '../../../functions/unity';
import { IUnity } from '../../../interfaces/IUnity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import {
  UpdateUnityBackground,
  UpdateUnityBox,
  CloseUpdateUnityButton,
  CloseUpdateUnityIcon,
  UpdateUnityLabel,
  UpdateUnityInput,
  CreateUnityButton,
  CreateUnityButtonLabel,
} from './styles';

interface IUpdateUnityProps extends ICommonUnityProps {
  unity: IUnity;
  setUpdateUnityIsVisible: (value: boolean) => void;
}

const UpdateUnity = (props: IUpdateUnityProps): JSX.Element => {
  /* Props */

  const { unity, setUpdateUnityIsVisible, getUnits } = props;

  /* Local State */

  const [title, setTitle] = useState(unity.title);

  /* Global State */

  const { aplication } = useSelector((store: State) => store);

  const { token } = aplication;

  const updateSucess = (): void => {
    getUnits();
    setUpdateUnityIsVisible(false);
  };

  const updateError = (): void => {
    console.log('erro');
  };

  const updateUnity = async (): Promise<void> => {
    updateUnityData(
      OnEducaAPI,
      unity.id,
      { title },
      token,
      updateSucess,
      updateError,
    );
  };

  return (
    <UpdateUnityBackground>
      <UpdateUnityBox>
        <CloseUpdateUnityButton onClick={() => setUpdateUnityIsVisible(false)}>
          <CloseUpdateUnityIcon className="fas fa-times" />
        </CloseUpdateUnityButton>
        <UpdateUnityLabel>Atualizar unidade</UpdateUnityLabel>
        <UpdateUnityInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
          value={title}
          type="text"
          placeholder="Título da unidade"
        />
        <CreateUnityButton onClick={() => updateUnity()}>
          <CreateUnityButtonLabel>Salvar</CreateUnityButtonLabel>
        </CreateUnityButton>
      </UpdateUnityBox>
    </UpdateUnityBackground>
  );
};

export default UpdateUnity;
