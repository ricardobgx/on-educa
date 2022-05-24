/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../../store';
import { SmallMaterialIconOutlined } from '../Icons/MaterialIcons/MaterialIconsOutlined';
import {
  PopupBackground,
  PopupBox,
  PopupTitle,
  ClosePopupButton,
} from './styles';

const Popup: React.FC = (): JSX.Element => {
  const { popup } = useSelector((store: RootState) => store);

  const { title, Children, childrenProps } = popup;

  const dispatch = useDispatch();
  const { closePopup } = bindActionCreators(ActionCreators, dispatch);

  return (
    <PopupBackground>
      <PopupBox className="with-shadow bd-rd-30">
        <ClosePopupButton onClick={() => closePopup()}>
          <SmallMaterialIconOutlined icon="close" color="" />
        </ClosePopupButton>
        <PopupTitle>{title}</PopupTitle>
        <Children {...childrenProps} />
      </PopupBox>
    </PopupBackground>
  );
};

export default Popup;
