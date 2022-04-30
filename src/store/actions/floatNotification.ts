import { FloatNotificationActionType } from '../action-types/floatNotification';

interface loadFloatNotificationContent {
  type: FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_CONTENT;
  content: string;
}

interface loadFloatNotificationIsActive {
  type: FloatNotificationActionType.LOAD_FLOAT_NOTIFICATION_IS_ACTIVE;
  isActive: boolean;
}

export type FloatNotificationAction =
  | loadFloatNotificationContent
  | loadFloatNotificationIsActive;
