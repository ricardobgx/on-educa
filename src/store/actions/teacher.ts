import { TeacherActionType } from '../action-types/teacher';

interface LoadTeacher {
  type: TeacherActionType.LOAD_TEACHER;
  teacher: ITeacher;
}

export type TeacherAction = LoadTeacher;
