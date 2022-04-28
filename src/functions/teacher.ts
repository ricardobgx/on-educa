import { AxiosInstance } from 'axios';
import { ITeacherParams } from '../dto/ITeacherParams';

const entityPath = 'teachers';

// POST

export const registerTeacher = async (
  API: AxiosInstance,
  teacherParams: ITeacherParams,
  registerSucess: () => void,
  registerError: () => void,
): Promise<void> => {
  await API.post(`/${entityPath}/`, teacherParams).then(
    () => registerSucess(),
    () => registerError(),
  );
};

// GET

export const getTeachers = async (
  API: AxiosInstance,
  setTeachersState: (teachers: ITeacher[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`).then((response) => {
    setTeachersState(response.data);
  });
};

// SHOW

export const getTeacher = async (
  API: AxiosInstance,
  id: string,
  setTeacherState: (teacher: ITeacher) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/${id}`).then((response) => {
    setTeacherState(response.data);
  });
};

export const getTeacherByPeople = async (
  API: AxiosInstance,
  peopleId: string,
  setTeacherState: (teacher: ITeacher) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/people/${peopleId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setTeacherState(response.data);
  });
};

// PUT

export const updateTeacher = async (
  API: AxiosInstance,
  id: string,
  teacherParams: ITeacherParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}`, teacherParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};
