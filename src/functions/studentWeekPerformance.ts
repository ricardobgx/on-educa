import { AxiosInstance } from 'axios';
import { IUpdateStudentWeekPerformanceValuesParams } from '../dto/IUpdateStudentWeekPerformanceValues';
import { IStudentWeekPerformance } from '../interfaces/IStudentWeekPerformance';

const entityPath = 'studentWeekPerformances';

export const getStudentWeekPerformances = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (studentWeekPerformances: IStudentWeekPerformance[]) => void,
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

export const getStudentWeekPerformanceByStudent = async (
  API: AxiosInstance,
  studentId: string,
  token: string,
  requestSucess: (studentWeekPerformance: IStudentWeekPerformance) => void,
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

export const updateStudentWeekPerformanceValues = async (
  API: AxiosInstance,
  updateStudentWeekPerformanceValuesParams: IUpdateStudentWeekPerformanceValuesParams,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.put(
    `/${entityPath}/student/${updateStudentWeekPerformanceValuesParams.studentId}`,
    {
      ...updateStudentWeekPerformanceValuesParams,
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
