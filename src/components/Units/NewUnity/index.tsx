import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUnity } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
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

interface INewUnityProps extends ICommonUnityProps {
  setNewUnityIsVisible: (value: boolean) => void;
}

const NewUnity = (props: INewUnityProps): JSX.Element => {
  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Props */

  const { setNewUnityIsVisible, getUnits } = props;

  /* LocalRootState */

  const [name, setName] = useState('');

  /* GlobalRootState */

  const { subject, aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const createUnitySucess = (): void => {
    getUnits();
    setNewUnityIsVisible(false);
  };

  const createUnityError = (): void => {
    showFloatNotification('erro');
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
            setName(event.target.value);
          }}
          type="text"
          placeholder="Título da unidade"
        />
        <CreateUnityButton
          onClick={() =>
            createUnity(
              OnEducaAPI,
              { name, subjectId: subject.id },
              token,
              createUnitySucess,
              createUnityError,
            )
          }
        >
          <CreateUnityButtonLabel>Criar unidade</CreateUnityButtonLabel>
        </CreateUnityButton>
      </NewUnityBox>
    </NewUnityBackground>
  );
};

export default NewUnity;
