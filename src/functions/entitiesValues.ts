import { IContent } from '../interfaces/IContent';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';
import { ISubject } from '../interfaces/ISubject';
import { ITeachingType } from '../interfaces/ITeachingType';
import { IUnity } from '../interfaces/IUnity';
import {
  DEFAULT_CONTENT,
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_SUBJECT,
  DEFAULT_TEACHING_TYPE,
  DEFAULT_UNITY,
} from '../static/defaultEntitiesValues';

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
