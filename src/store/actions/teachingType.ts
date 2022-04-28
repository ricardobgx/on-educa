import { TeachingTypeActionType } from '../action-types/teachingType';

interface LoadTeachingType {
  type: TeachingTypeActionType.LOAD_TEACHING_TYPE;
  teachingType: ITeachingType;
}

export type TeachingTypeAction = LoadTeachingType;
