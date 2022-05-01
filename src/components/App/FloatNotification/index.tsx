/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../../store';
import { FloatNotificationBox, FloatNotificationContent } from './styles';

const FloatNotification: React.FC = () => {
  const { floatNotification } = useSelector((store: RootState) => store);
  const { content } = floatNotification;

  const dispatch = useDispatch();

  const { hideFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  useEffect(() => {
    setTimeout(() => {
      hideFloatNotification();
    }, 10000);
  }, []);

  return (
    <FloatNotificationBox className="with-shadow bd-rd-30">
      <FloatNotificationContent>{content}</FloatNotificationContent>
    </FloatNotificationBox>
  );
};

export default FloatNotification;
