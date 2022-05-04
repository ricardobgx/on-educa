/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_SIGN_UP } from '../../static/defaultEntitiesValues';
import { SignUpActionType } from '../action-types/signUp';
import { SignUpAction } from '../actions/signUp';

const signUpReducer = (
  state: ISignUp = DEFAULT_SIGN_UP,
  action: SignUpAction,
): any => {
  switch (action.type) {
    case SignUpActionType.LOAD_SIGN_UP_COMMON_DATA:
      return { ...state, ...action.signUpCommonData };
    case SignUpActionType.LOAD_SIGN_UP_USER_TYPE_DATA:
      return { ...state, ...action.signUpUserTypeData };
    case SignUpActionType.LOAD_SIGN_UP_TEACHER_DATA:
      return { ...state, teachingTypeId: action.signUpTeacherData };
    case SignUpActionType.LOAD_SIGN_UP_STUDENT_DATA:
      return { ...state, isStudent: action.signUpStudentData };
    default:
      return state;
  }
};

export default signUpReducer;
