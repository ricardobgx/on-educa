import { AxiosInstance } from 'axios';
import { IFriendRequestParams } from '../dto/friendRequest/IFriendRequestParams';

/* Utils */

export const removeFriendRequest = (
  friendRequest: IFriendRequest,
  friendRequests: IFriendRequest[],
): IFriendRequest[] => {
  return friendRequests.filter(
    (friendRequestAux) => friendRequest.id !== friendRequestAux.id,
  );
};

/* API */

const entityPath = 'friendRequests';

export const createFriendRequest = async (
  API: AxiosInstance,
  friendRequestParams: IFriendRequestParams,
  token: string,
  setFriendRequest: (value: IFriendRequest) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, friendRequestParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setFriendRequest(response.data);
  });
};

export const getFriendRequests = async (
  API: AxiosInstance,
  token: string,
  setFriendRequests: (value: IFriendRequest[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setFriendRequests(response.data);
  });
};

export const getFriendRequestsByPeople = async (
  API: AxiosInstance,
  peopleId: string,
  token: string,
): Promise<IFriendRequest[]> => {
  const { data } = await API.get(`/${entityPath}/people/${peopleId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getFriendRequest = async (
  API: AxiosInstance,
  friendRequestId: string,
  token: string,
  setFriendRequest: (value: IFriendRequest) => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${friendRequestId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setFriendRequest(response.data);
  });
};

export const deleteFriendRequest = async (
  API: AxiosInstance,
  friendRequestId: string,
  token: string,
  deleteSucess: () => void,
): Promise<void> => {
  await API.delete(`/${entityPath}/${friendRequestId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    deleteSucess();
  });
};

export const acceptFriendRequest = async (
  API: AxiosInstance,
  friendRequestId: string,
  token: string,
  acceptSucess: () => void,
): Promise<void> => {
  await API.put(
    `/${entityPath}/accept/${friendRequestId}`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then(() => {
    acceptSucess();
  });
};
