/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { ContentActionType } from '../action-types/content';
import { ContentAction } from '../actions/content';

// Content

export const loadContent = (content: IContent) => {
  return (dispatch: Dispatch<ContentAction>) => {
    dispatch({
      type: ContentActionType.LOAD_CONTENT,
      content,
    });
  };
};
