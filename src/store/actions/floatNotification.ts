import { FloatNotificationActionType } from '../action-types/floatNotification';

interface showFloatNotificationContent {
  type: FloatNotificationActionType.SHOW_FLOAT_NOTIFICATION;
  content: string;
}

interface hideFloatNotificationContent {
  type: FloatNotificationActionType.HIDE_FLOAT_NOTIFICATION;
}

export type FloatNotificationAction =
  | showFloatNotificationContent
  | hideFloatNotificationContent;
