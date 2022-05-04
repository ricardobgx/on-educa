import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const FriendRequesCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const FriendRequestButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const RejectRequest = styled(FriendRequestButton)``;
export const RejectRequestIcon = styled(smallIcon)``;
export const AcceptRequest = styled(FriendRequestButton)`
  margin-bottom: 10px;
`;
export const AcceptRequestIcon = styled(smallIcon)``;
