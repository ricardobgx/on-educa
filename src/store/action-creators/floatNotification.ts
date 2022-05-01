/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { FloatNotificationActionType } from '../action-types/floatNotification';
import { FloatNotificationAction } from '../actions/floatNotification';

// FloatNotification

export const showFloatNotification = (content: string) => {
  return (dispatch: Dispatch<FloatNotificationAction>) => {
    dispatch({
      type: FloatNotificationActionType.SHOW_FLOAT_NOTIFICATION,
      content,
    });
  };
};

export const hideFloatNotification = () => {
  return (dispatch: Dispatch<FloatNotificationAction>) => {
    dispatch({
      type: FloatNotificationActionType.HIDE_FLOAT_NOTIFICATION,
    });
  };
};
