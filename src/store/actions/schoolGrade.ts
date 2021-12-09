import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { SchoolGradeActionType } from '../action-types/schoolGrade';

interface LoadSchoolGrade {
  type: SchoolGradeActionType.LOAD_SCHOOL_GRADE;
  schoolGrade: ISchoolGrade;
}

export type SchoolGradeAction = LoadSchoolGrade;
