import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

const FriendButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  min-width: 40px;
`;
const FriendButtonLabel = styled(paragraph)`
  margin-right: 5px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FriendActionsBox = styled.div``;

// Amigo

export const MyFriendActions = styled.div`
  display: flex;
`;
export const UnfriendButton = styled(FriendButton)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const UnfriendButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;

// Nao eh amigo

export const NoFriendActions = styled.div``;

/* Solicitacoes que eu envio */

export const MeFriendRequestActions = styled.div``;

// Botao para enviar solicitacao

export const SendFriendRequestButton = styled(FriendButton)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SendFriendRequestButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;
export const SendFriendRequestButtonIcon = styled(smallIcon)``;

// Botao para cancelar solicitacao

export const CancelFriendRequestButton = styled(FriendButton)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const CancelFriendRequestButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;
export const CancelFriendRequestButtonIcon = styled(smallIcon)``;

/* Solicitacoes que eu recebo */

export const FriendFriendRequestActions = styled.div`
  display: flex;
`;

// Botao para aceitar

export const AcceptFriendRequestButton = styled(FriendButton)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const AcceptFriendRequestButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;
export const AcceptFriendRequestButtonIcon = styled(smallIcon)``;

// Botao para rejeitar

export const RejectFriendRequestButton = styled(FriendButton)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const RejectFriendRequestButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;
export const RejectFriendRequestButtonIcon = styled(smallIcon)``;
