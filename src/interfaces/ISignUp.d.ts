interface ISignUpCommonData {
  name: string;
  email: string;
  password: string;
}

interface ISignUpUserTypeData {
  isStudent: boolean;
}

interface ISignUpTeacherData {
  teachingTypeId: string;
}

interface ISignUpStudentData {
  schoolGradeId: string;
}

interface ISignUp
  extends ISignUpCommonData,
    ISignUpUserTypeData,
    ISignUpTeacherData,
    ISignUpStudentData {}
