import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUnity } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  UnityPopupBox,
  UnityPopupInput,
  UnityPopupButton,
  UnityPopupButtonLabel,
  UnityPopupActions,
} from '../styles';

const NewUnity = (props: ICommonUnityProps): JSX.Element => {
  const dispatch = useDispatch();
  const { showFloatNotification, closePopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Props */

  const { getUnits } = props;

  /* LocalRootState */

  const [name, setName] = useState('');

  /* GlobalRootState */

  const { subject, aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const createUnitySucess = (): void => {
    getUnits();
    closePopup();
  };

  const createUnityError = (): void => {
    showFloatNotification('erro');
  };

  return (
    <UnityPopupBox>
      <UnityPopupInput
        className="bd-rd-20"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        type="text"
        placeholder="Título da unidade"
      />
      <UnityPopupActions>
        <UnityPopupButton
          className="block-shadow-button secondary-action bd-rd-20"
          onClick={() => closePopup()}
        >
          <UnityPopupButtonLabel>Cancelar</UnityPopupButtonLabel>
        </UnityPopupButton>
        <UnityPopupButton
          className="block-shadow-button main-action bd-rd-20"
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
          <UnityPopupButtonLabel>Criar unidade</UnityPopupButtonLabel>
        </UnityPopupButton>
      </UnityPopupActions>
    </UnityPopupBox>
  );
};

export default NewUnity;
