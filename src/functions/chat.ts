import { AxiosInstance } from 'axios';
import { IChatParams } from '../dto/chat/IChatParams';

const entityPath = 'chats';

export const createChat = async (
  API: AxiosInstance,
  chatParams: IChatParams,
  token: string,
  setChat: (value: IChat) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, chatParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setChat(response.data);
  });
};

export const getChats = async (
  API: AxiosInstance,
  token: string,
  setChats: (value: IChat[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setChats(response.data);
  });
};

export const getChatsByPeople = async (
  API: AxiosInstance,
  peopleId: string,
  token: string,
  setChats: (value: IChat[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${peopleId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setChats(response.data);
  });
};

export const getChat = async (
  API: AxiosInstance,
  chatId: string,
  token: string,
  setChat: (value: IChat) => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${chatId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setChat(response.data);
  });
};

export const deleteChat = async (
  API: AxiosInstance,
  chatId: string,
  token: string,
  deleteSucess: () => void,
): Promise<void> => {
  await API.delete(`/${entityPath}/${chatId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    deleteSucess();
  });
};

export const getOrCreateChat = async (
  API: AxiosInstance,
  chatParams: IChatParams,
  token: string,
  setChat: (value: IChat) => void,
): Promise<void> => {
  await API.post(`/${entityPath}/getOrCreate`, chatParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setChat(response.data);
  });
};
