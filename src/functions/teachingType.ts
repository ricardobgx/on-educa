import { AxiosInstance } from 'axios';

const entityPath = 'teachingTypes';

// GET

export const getTeachingTypes = async (
  API: AxiosInstance,
): Promise<ITeachingType[]> => {
  const { data } = await API.get(`/${entityPath}`);

  return data;
};

// SHOW

export const getTeachingType = async (
  API: AxiosInstance,
  id: string,
  setTeachingTypeState: (teachingType: ITeachingType) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setTeachingTypeState(response.data);
  });
};
