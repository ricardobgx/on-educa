import { AxiosInstance } from 'axios';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';

const entityPath = '/schoolGrades';

export const getSchoolGrades = async (
  API: AxiosInstance,
  setSchoolGradesState: (schoolGrades: ISchoolGrade[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSchoolGradesState(response.data);
  });
};

export const getSchoolGradesByTeachingType = async (
  API: AxiosInstance,
  teachingTypeId: string,
  setSchoolGradesState: (schoolGrades: ISchoolGrade[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`${entityPath}/teachingtype/${teachingTypeId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSchoolGradesState(response.data);
  });
};

// SHOW

export const getSchoolGrade = async (
  API: AxiosInstance,
  id: string,
  setSchoolGradeState: (schoolGrade: ISchoolGrade) => void,
): Promise<void> => {
  await API.get(`${entityPath}/${id}`).then((response) => {
    setSchoolGradeState(response.data);
  });
};
