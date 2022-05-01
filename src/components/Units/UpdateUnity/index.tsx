import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUnity as updateUnityData } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
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
  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Props */

  const { unity, setUpdateUnityIsVisible, getUnits } = props;

  /* LocalRootState */

  const [name, setName] = useState(unity.name);

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const updateSucess = (): void => {
    getUnits();
    setUpdateUnityIsVisible(false);
  };

  const updateError = (): void => {
    showFloatNotification('erro');
  };

  const updateUnity = async (): Promise<void> => {
    updateUnityData(
      OnEducaAPI,
      unity.id,
      { name },
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
            setName(event.target.value);
          }}
          value={name}
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
