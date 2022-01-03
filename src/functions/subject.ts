import { AxiosInstance } from 'axios';
import { ISubject } from '../interfaces/ISubject';

export const getSubjects = async (
  API: AxiosInstance,
  setSubjectsState: (subjects: ISubject[]) => void,
  token: string,
  name?: string,
): Promise<void> => {
  await API.get(`/subjects${name ? `?name=${name}` : ''}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSubjectsState(response.data);
  });
};

export const getSubjectsBySchoolGrade = async (
  API: AxiosInstance,
  schoolGradeId: string,
  setSubjectsState: (subjects: ISubject[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/subjects/schoolgrade/${schoolGradeId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSubjectsState(response.data);
  });
};

export const getSubject = async (
  API: AxiosInstance,
  id: string,
  token: string,
  setSubjectState: (value: ISubject) => void,
): Promise<void> => {
  await API.get(`/subjects/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSubjectState(response.data);
  });
};
