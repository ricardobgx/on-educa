/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { FloatNotificationActionType } from '../action-types/floatNotification';
import { FloatNotificationAction } from '../actions/floatNotification';

// FloatNotification

export const loadFloatNotificationContent = (content: string) => {
  return (dispatch: Dispatch<FloatNotificationAction>) => {
    dispatch({
      type: FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_CONTENT,
      content,
    });
  };
};

export const loadFloatNotificationIsActive = (isActive: boolean) => {
  return (dispatch: Dispatch<FloatNotificationAction>) => {
    dispatch({
      type: FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_IS_ACTIVE,
      isActive,
    });
  };
};
