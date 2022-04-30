/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_FLOAT_NOTIFICATION } from '../../static/defaultEntitiesValues';
import { FloatNotificationActionType } from '../action-types/floatNotification';
import { FloatNotificationAction } from '../actions/floatNotification';

const floatNotificationReducer = (
  state: IFloatNotification = DEFAULT_FLOAT_NOTIFICATION,
  action: FloatNotificationAction,
): any => {
  switch (action.type) {
    case FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_CONTENT:
      return { ...state, content: action.content };
    case FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_IS_ACTIVE:
      return { ...state, isActive: action.isActive };
    default:
      return state;
  }
};

export default floatNotificationReducer;
