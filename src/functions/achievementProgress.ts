import { AxiosInstance } from 'axios';

export const getAchievementProgressByPeopleAndAchievement = async (
  API: AxiosInstance,
  peopleId: string,
  achievementId: string,
  setAchievementProgressState: (value: IAchievementProgress) => void,
  token: string,
): Promise<void> => {
  await API.get(
    `/achievementProgress/people/${peopleId}/achievement/${achievementId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then((response) => {
    setAchievementProgressState(response.data);
  });
};
