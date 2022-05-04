/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { SignUpActionType } from '../action-types/signUp';
import { SignUpAction } from '../actions/signUp';

// SignUp

export const loadSignUpCommonData = (signUpCommonData: ISignUpCommonData) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: SignUpActionType.LOAD_SIGN_UP_COMMON_DATA,
      signUpCommonData,
    });
  };
};

export const loadSignUpUserTypeData = (
  signUpUserTypeData: ISignUpUserTypeData,
) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: SignUpActionType.LOAD_SIGN_UP_USER_TYPE_DATA,
      signUpUserTypeData,
    });
  };
};

export const loadSignUpTeacherData = (
  signUpTeacherData: ISignUpTeacherData,
) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: SignUpActionType.LOAD_SIGN_UP_TEACHER_DATA,
      signUpTeacherData,
    });
  };
};

export const loadSignUpStudentData = (
  signUpStudentData: ISignUpStudentData,
) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: SignUpActionType.LOAD_SIGN_UP_STUDENT_DATA,
      signUpStudentData,
    });
  };
};
