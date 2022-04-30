import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../store';
import { FloatNotificationBox, FloatNotificationContent } from './styles';

const FloatNotification: React.FC = () => {
  const dispatch = useDispatch();
  const { loadFloatNotificationIsActive } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  useEffect(() => {
    setTimeout(() => {
      loadFloatNotificationIsActive(false);
    }, 10000);
  }, []);

  return (
    <FloatNotificationBox className="with-shadow bd-rd-30">
      <FloatNotificationContent>
        E-mail ou senha incorretos
      </FloatNotificationContent>
    </FloatNotificationBox>
  );
};

export default FloatNotification;
