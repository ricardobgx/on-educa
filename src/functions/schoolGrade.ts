import { AxiosInstance } from 'axios';

const entityPath = '/schoolGrades';

export const getSchoolGrades = async (
  API: AxiosInstance,
  token: string,
): Promise<ISchoolGrade[]> => {
  const { data } = await API.get(`${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getSchoolGradesByTeachingType = async (
  API: AxiosInstance,
  teachingTypeId: string,
): Promise<ISchoolGrade[]> => {
  const { data } = await API.get(
    `${entityPath}/teachingtype/${teachingTypeId}`,
  );

  return data;
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
