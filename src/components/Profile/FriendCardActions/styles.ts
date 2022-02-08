import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { LinkButton } from '../../../global/styles/components/linkComponents';

export const FriendCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const FriendButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const UnfriendButton = styled(FriendButton)`
  margin-bottom: 10px;
`;
export const UnfriendButtonIcon = styled(smallIcon)``;
export const AddFriendButton = styled(FriendButton)`
  height: 100%;
`;
export const AddFriendButtonIcon = styled(smallIcon)``;

export const SendMessageButton = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const SendMessageButtonIcon = styled(smallIcon)``;
