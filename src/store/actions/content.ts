import { ContentActionType } from '../action-types/content';

interface LoadContent {
  type: ContentActionType.LOAD_CONTENT;
  content: IContent;
}

export type ContentAction = LoadContent;
