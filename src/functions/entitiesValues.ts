import { IAlternative } from '../interfaces/IAlternative';
import { IContent } from '../interfaces/IContent';
import { IDuel } from '../interfaces/IDuel';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';
import { ISubject } from '../interfaces/ISubject';
import { ITeachingType } from '../interfaces/ITeachingType';
import { IUnity } from '../interfaces/IUnity';
import { IUser } from '../interfaces/IUser';
import {
  DEFAULT_ALTERNATIVE,
  DEFAULT_CONTENT,
  DEFAULT_DUEL,
  DEFAULT_PRACTICE,
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_SUBJECT,
  DEFAULT_TEACHING_TYPE,
  DEFAULT_UNITY,
  DEFAULT_USER,
} from '../static/defaultEntitiesValues';
import { IPractice } from '../store/actions/practice';

export const isDefaultUser = (user: IUser): boolean => user === DEFAULT_USER;

export const isDefaultTeachingType = (teachingType: ITeachingType): boolean =>
  teachingType === DEFAULT_TEACHING_TYPE;

export const isDefaultSchoolGrade = (schoolGrade: ISchoolGrade): boolean =>
  schoolGrade === DEFAULT_SCHOOL_GRADE;

export const isDefaultSubject = (subject: ISubject): boolean =>
  subject === DEFAULT_SUBJECT;

export const isDefaultUnity = (unity: IUnity): boolean =>
  unity === DEFAULT_UNITY;

export const isDefaultContent = (content: IContent): boolean =>
  content === DEFAULT_CONTENT;

export const isDefaultAlternative = (alternative: IAlternative): boolean =>
  alternative === DEFAULT_ALTERNATIVE;

export const isDefaultPractice = (pratice: IPractice): boolean =>
  pratice === DEFAULT_PRACTICE;

export const isDefaultDuel = (duel: IDuel): boolean => duel === DEFAULT_DUEL;
