import { StudentActionType } from '../action-types/student';

interface LoadStudent {
  type: StudentActionType.LOAD_STUDENT;
  student: IStudent;
}

export type StudentAction = LoadStudent;
