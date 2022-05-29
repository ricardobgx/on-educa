import { AxiosInstance } from 'axios';

export const getLeagues = async (
  API: AxiosInstance,
  setLeaguesState: (value: ILeague[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/leagues`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setLeaguesState(response.data);
  });
};

export const getLeague = async (
  API: AxiosInstance,
  id: string,
  setLeagueState: (value: ILeague) => void,
  token: string,
): Promise<void> => {
  await API.get(`/leagues/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setLeagueState(response.data);
  });
};
