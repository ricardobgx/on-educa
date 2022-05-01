import { SubjectActionType } from '../action-types/subject';

interface LoadSubject {
  type: SubjectActionType.LOAD_SUBJECT;
  subject: ISubject;
}

export type SubjectAction = LoadSubject;
