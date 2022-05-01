/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_CONTENT } from '../../static/defaultEntitiesValues';
import { ContentActionType } from '../action-types/content';
import { ContentAction } from '../actions/content';

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
