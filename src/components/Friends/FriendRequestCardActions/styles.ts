import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { LinkButton } from '../../../global/styles/components/linkComponents';

export const FriendRequesCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const RejectRequest = styled(Button)`
  color: ${({ theme }) => theme.similarColors.warningColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 40px;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.whiteColor};
    background: ${({ theme }) => theme.similarColors.warningColor};
  }
`;
export const RejectRequestIcon = styled(smallIcon)``;
export const AcceptRequest = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 40px;
  margin-bottom: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const AcceptRequestIcon = styled(smallIcon)``;
