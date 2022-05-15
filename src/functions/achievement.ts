import { AxiosInstance } from 'axios';

export const getAchievements = async (
  API: AxiosInstance,
  setAchievementsState: (value: IAchievement[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/achievements`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setAchievementsState(response.data);
  });
};
