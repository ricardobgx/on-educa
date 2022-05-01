import { AxiosInstance } from 'axios';
import { IMessageParams } from '../dto/message/IMessageParams';

const entityPath = 'messages';

export const createMessage = async (
  API: AxiosInstance,
  messageParams: IMessageParams,
  token: string,
  setMessage: (value: IMessage) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, messageParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMessage(response.data);
  });
};

export const getMessages = async (
  API: AxiosInstance,
  token: string,
  setMessages: (value: IMessage[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMessages(response.data);
  });
};

export const getMessage = async (
  API: AxiosInstance,
  messageId: string,
  token: string,
  setMessage: (value: IMessage) => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${messageId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMessage(response.data);
  });
};

export const deleteMessage = async (
  API: AxiosInstance,
  messageId: string,
  token: string,
  deleteSucess: () => void,
): Promise<void> => {
  await API.delete(`/${entityPath}/${messageId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    deleteSucess();
  });
};
