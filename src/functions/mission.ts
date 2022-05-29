import { AxiosInstance } from 'axios';

export const getMissions = async (
  API: AxiosInstance,
  setMissionsState: (value: IMission[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/missions`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMissionsState(response.data);
  });
};
