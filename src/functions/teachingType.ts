import { AxiosInstance } from 'axios';
import { ITeachingType } from '../interfaces/ITeachingType';

const entityPath = 'teachingTypes';

// GET

export const getTeachingTypes = async (
  API: AxiosInstance,
  setTeachingTypesState: (teachingTypes: ITeachingType[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`).then((response) => {
    setTeachingTypesState(response.data);
  });
};

// SHOW

export const getTeachingType = async (
  API: AxiosInstance,
  id: string,
  setTeachingTypeState: (teachingType: ITeachingType) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/${id}`).then((response) => {
    setTeachingTypeState(response.data);
  });
};
