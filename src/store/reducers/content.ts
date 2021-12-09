/* eslint-disable @typescript-eslint/no-explicit-any */

import { IContent } from '../../interfaces/IContent';
import { ContentActionType } from '../action-types/content';
import { ContentAction } from '../actions/content';

export const DEFAULT_CONTENT: IContent = {
  id: '',
  title: '',
  description: '',
  video: '',
  index: 0,
};

const contentReducer = (
  state: IContent = DEFAULT_CONTENT,
  action: ContentAction,
): any => {
  switch (action.type) {
    case ContentActionType.LOAD_CONTENT:
      return action.content;
    default:
      return state;
  }
};

export default contentReducer;
