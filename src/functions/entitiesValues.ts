import { IAlternative } from '../interfaces/IAlternative';
import { IContent } from '../interfaces/IContent';
import { IDuel } from '../interfaces/IDuel';
import { IDuelTeamParticipation } from '../interfaces/IDuelTeamParticipation';
import { IPractice } from '../interfaces/IPractice';
import { IPracticeQuestion } from '../interfaces/IPracticeQuestion';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';
import { ISubject } from '../interfaces/ISubject';
import { ITeachingType } from '../interfaces/ITeachingType';
import { IUnity } from '../interfaces/IUnity';
import { IPeople } from '../interfaces/IPeople';
import {
  DEFAULT_ALTERNATIVE,
  DEFAULT_CONTENT,
  DEFAULT_DUEL,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
  DEFAULT_PRACTICE,
  DEFAULT_PRACTICE_QUESTION,
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_STUDENT,
  DEFAULT_SUBJECT,
  DEFAULT_TEACHER,
  DEFAULT_TEACHING_TYPE,
  DEFAULT_UNITY,
  DEFAULT_PEOPLE,
  DEFAULT_CHAT,
} from '../static/defaultEntitiesValues';
import { ITeacher } from '../interfaces/ITeacher';
import { IStudent } from '../interfaces/IStudent';
import { IChat } from '../interfaces/IChat';

// Usuarios

export const isDefaultPeople = (people: IPeople): boolean =>
  people === DEFAULT_PEOPLE;

export const isDefaultStudent = (student: IStudent): boolean =>
  student === DEFAULT_STUDENT;

export const isDefaultTeacher = (teacher: ITeacher): boolean =>
  teacher === DEFAULT_TEACHER;

// Materiais escolares

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

export const isDefaultPracticeQuestion = (
  praticeQuestion: IPracticeQuestion,
): boolean => praticeQuestion === DEFAULT_PRACTICE_QUESTION;

// Duelos

export const isDefaultDuel = (duel: IDuel): boolean => duel === DEFAULT_DUEL;

export const isDefaultDuelTeamParticipation = (
  duelTeamParticipation: IDuelTeamParticipation,
): boolean => duelTeamParticipation === DEFAULT_DUEL_TEAM_PARTICIPATION;

/* Chats */

export const isDefaultChat = (chat: IChat): boolean => chat === DEFAULT_CHAT;
