import { AxiosInstance } from 'axios';
import { IUpdateStudentWeeklyPerformanceValuesParams } from '../dto/IUpdateStudentWeeklyPerformanceValues';

const entityPath = 'studentWeeklyPerformances';

export const getStudentWeeklyPerformances = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (studentWeekPerformances: IStudentWeeklyPerformance[]) => void,
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

export const getStudentWeeklyPerformanceByStudent = async (
  API: AxiosInstance,
  studentId: string,
  token: string,
  requestSucess: (studentWeekPerformance: IStudentWeeklyPerformance) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/student/${studentId}`, {
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

export const updateStudentWeeklyPerformanceValues = async (
  API: AxiosInstance,
  updateStudentWeeklyPerformanceValuesParams: IUpdateStudentWeeklyPerformanceValuesParams,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.put(
    `/${entityPath}/student/${updateStudentWeeklyPerformanceValuesParams.studentId}`,
    {
      ...updateStudentWeeklyPerformanceValuesParams,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then(
    (response) => {
      requestSucess();
    },
    () => {
      requestError();
    },
  );
};
