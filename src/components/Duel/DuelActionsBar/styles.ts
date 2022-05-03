import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelActionsBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: ${({ theme }) => theme.colors.boxColor};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const OwnerName = styled(paragraph)``;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: calc(50% - 20px);
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const SeeDetailsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 100%;
  padding: 0 20px;
  margin-right: 20px;
  font-weight: bold;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
export const SeeDetailsButtonLabel = styled(paragraph)`
  @media (max-width: 550px) {
    display: none;
  }
`;
export const SeeDetailsButtonIcon = styled(mediumIcon)`
  @media (min-width: 550px) {
    display: none;
  }
`;
export const Participations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 100%;
  padding: 0 20px;
  margin-right: 20px;
  font-weight: bold;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
export const ChatButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 100%;
  padding: 0 20px;
  margin-right: 20px;
  font-weight: bold;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
export const ChatButtonLabel = styled(paragraph)`
  @media (max-width: 550px) {
    display: none;
  }
`;
export const ChatButtonIcon = styled(mediumIcon)`
  @media (min-width: 550px) {
    display: none;
  }
`;
export const ParticipationsLabel = styled(paragraph)`
  margin-right: 10px;

  @media (max-width: 550px) {
    display: none;
  }
`;
export const ParticipationsNumberLabel = styled(paragraph)``;
export const ParticipationsIcon = styled(mediumIcon)`
  margin-left: 5px;

  @media (min-width: 550px) {
    display: none;
  }
`;
export const CloseDuelButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  width: 100%;
  padding: 0 20px;
  font-weight: bold;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.whiteColor};
    background: ${({ theme }) => theme.similarColors.warningColor};
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
export const CloseDuelButtonLabel = styled(paragraph)`
  @media (max-width: 550px) {
    display: none;
  }
`;
export const CloseDuelButtonIcon = styled(mediumIcon)`
  @media (min-width: 550px) {
    display: none;
  }
`;
