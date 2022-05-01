import { AxiosInstance } from 'axios';
import { IUpdateTeacherWeeklyPerformanceValuesParams } from '../dto/IUpdateTeacherWeeklyPerformanceValues';

const entityPath = 'teacherWeeklyPerformances';

export const getTeacherWeeklyPerformances = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (teacherWeekPerformances: ITeacherWeeklyPerformance[]) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess(response.data);
    },
    () => {
      requestError();
    },
  );
};

export const getTeacherWeeklyPerformanceByTeacher = async (
  API: AxiosInstance,
  teacherId: string,
  token: string,
  requestSucess: (teacherWeekPerformance: ITeacherWeeklyPerformance) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/teacher/${teacherId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess(response.data);
    },
    () => {
      requestError();
    },
  );
};

export const updateTeacherWeeklyPerformanceValues = async (
  API: AxiosInstance,
  updateTeacherWeeklyPerformanceValuesParams: IUpdateTeacherWeeklyPerformanceValuesParams,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.put(
    `/${entityPath}/teacher/${updateTeacherWeeklyPerformanceValuesParams.teacherId}`,
    {
      ...updateTeacherWeeklyPerformanceValuesParams,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then(
    () => {
      requestSucess();
    },
    () => {
      requestError();
    },
  );
};
