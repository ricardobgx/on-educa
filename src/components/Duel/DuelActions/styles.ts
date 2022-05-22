import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const InviteFriendsButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }
`;
export const InviteFriendsButtonLabel = styled(paragraph)``;

export const QuitDuelButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  background: ${({ theme }) => theme.flagColors.redColor};
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const QuitDuelButtonLabel = styled(paragraph)``;
export const StartDuelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  border: none;
  color: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const StartDuelButtonLabel = styled(paragraph)``;
