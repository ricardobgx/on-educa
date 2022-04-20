import { AxiosInstance } from 'axios';
import { IStudentParams } from '../dto/IStudentParams';
import { IStudent } from '../interfaces/IStudent';

const entityPath = 'students';

// POST

export const registerStudent = async (
  API: AxiosInstance,
  studentParams: IStudentParams,
  registerSucess: () => void,
  registerError: () => void,
): Promise<void> => {
  await API.post(`/${entityPath}/`, studentParams).then(
    () => registerSucess(),
    () => registerError(),
  );
};

// GET

export const getStudents = async (
  API: AxiosInstance,
  setStudentsState: (students: IStudent[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`).then((response) => {
    setStudentsState(response.data);
  });
};

// SHOW

export const getStudent = async (
  API: AxiosInstance,
  id: string,
  setStudentState: (student: IStudent) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/${id}`).then((response) => {
    setStudentState(response.data);
  });
};

export const getStudentByPeople = async (
  API: AxiosInstance,
  peopleId: string,
  setStudentState: (student: IStudent) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/people/${peopleId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setStudentState(response.data);
  });
};

// PUT

export const updateStudent = async (
  API: AxiosInstance,
  id: string,
  studentParams: IStudentParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}`, studentParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};
