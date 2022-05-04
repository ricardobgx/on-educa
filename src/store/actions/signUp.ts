import { SignUpActionType } from '../action-types/signUp';

interface LoadSignUpCommonData {
  type: SignUpActionType.LOAD_SIGN_UP_COMMON_DATA;
  signUpCommonData: ISignUpCommonData;
}

interface LoadSignUpUserTypeData {
  type: SignUpActionType.LOAD_SIGN_UP_USER_TYPE_DATA;
  signUpUserTypeData: ISignUpUserTypeData;
}

interface LoadSignUpTeacherData {
  type: SignUpActionType.LOAD_SIGN_UP_TEACHER_DATA;
  signUpTeacherData: ISignUpTeacherData;
}

interface LoadSignUpStudentData {
  type: SignUpActionType.LOAD_SIGN_UP_STUDENT_DATA;
  signUpStudentData: ISignUpStudentData;
}

export type SignUpAction =
  | LoadSignUpCommonData
  | LoadSignUpUserTypeData
  | LoadSignUpTeacherData
  | LoadSignUpStudentData;
