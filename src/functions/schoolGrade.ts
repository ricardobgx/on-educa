import { AxiosInstance } from 'axios';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';

export const getSchoolGrades = async (
  API: AxiosInstance,
  setSchoolGradesState: (schoolGrades: ISchoolGrade[]) => void,
): Promise<void> => {
  await API.get('/schoolgrades').then((response) => {
    setSchoolGradesState(response.data);
  });
};

// SHOW

export const getSchoolGrade = async (
  API: AxiosInstance,
  id: string,
  setSchoolGradeState: (schoolGrade: ISchoolGrade) => void,
): Promise<void> => {
  await API.get(`/schoolgrades/${id}`).then((response) => {
    setSchoolGradeState(response.data);
  });
};
