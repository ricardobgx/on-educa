import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../../store';
import { SmallMaterialIconOutlined } from '../Icons/MaterialIcons/MaterialIconsOutlined';
import {
  ConfirmActionPopupBox,
  CloseConfirmActionPopupButton,
  ConfirmActionPopupLabel,
  ConfirmActionPopupActions,
  ConfirmActionPopupAction,
  ConfirmActionPopupActionLabel,
  ConfirmActionPopupBackground,
} from './styles';

const ConfirmActionPopup: React.FC = () => {
  const { confirmActionPopup } = useSelector((store: RootState) => store);
  const { message, method } = confirmActionPopup;

  const dispatch = useDispatch();
  const { hideConfirmActionPopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  return (
    <ConfirmActionPopupBackground>
      <ClickAwayListener onClickAway={() => hideConfirmActionPopup()}>
        <ConfirmActionPopupBox
          className="bd-rd-30"
          onClick={() => hideConfirmActionPopup()}
        >
          <CloseConfirmActionPopupButton>
            <SmallMaterialIconOutlined color="" icon="close" />
          </CloseConfirmActionPopupButton>
          <ConfirmActionPopupLabel>{message}</ConfirmActionPopupLabel>
          <ConfirmActionPopupActions>
            <ConfirmActionPopupAction
              className="block-shadow-button main-action bd-rd-20"
              onClick={() => hideConfirmActionPopup()}
            >
              <ConfirmActionPopupActionLabel>
                Cancelar
              </ConfirmActionPopupActionLabel>
            </ConfirmActionPopupAction>
            <ConfirmActionPopupAction
              className="block-shadow-button secondary-action bd-rd-20"
              onClick={() => method()}
            >
              <ConfirmActionPopupActionLabel>
                Confirmar
              </ConfirmActionPopupActionLabel>
            </ConfirmActionPopupAction>
          </ConfirmActionPopupActions>
        </ConfirmActionPopupBox>
      </ClickAwayListener>
    </ConfirmActionPopupBackground>
  );
};

export default ConfirmActionPopup;
