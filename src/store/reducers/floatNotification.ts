/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_FLOAT_NOTIFICATION } from '../../static/defaultEntitiesValues';
import { FloatNotificationActionType } from '../action-types/floatNotification';
import { FloatNotificationAction } from '../actions/floatNotification';

const floatNotificationReducer = (
  state: IFloatNotification = DEFAULT_FLOAT_NOTIFICATION,
  action: FloatNotificationAction,
): any => {
  switch (action.type) {
    case FloatNotificationActionType.SHOW_FLOAT_NOTIFICATION:
      return { content: action.content, isActive: true };
    case FloatNotificationActionType.HIDE_FLOAT_NOTIFICATION:
      return { content: '', isActive: false };
    default:
      return state;
  }
};

export default floatNotificationReducer;
