import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../global/styles/components/buttonComponents';
import { mediumIcon } from '../../global/styles/components/iconComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const ChatsBox = styled.div`
  margin: 20px;
  display: flex;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 5px;
  height: calc(100vh - 135px);
  position: relative;
  overflow-x: hidden;
`;
export const ToggleRecentConversationsCheckbox = styled.input`
  display: none;

  &:checked ~ div {
    left: 0%;
  }

  &:checked ~ div label {
    right: -2px;
    transform: rotateY(-180deg) translateY(-50%);
  }
`;
export const ToggleRecentConversationsLabel = styled.label`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  width: 30px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 0% 50% 50% 0%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;

  @media (max-width: 1150px) {
    display: flex;
  }
`;
export const ToggleRecentConversationsLabelIcon = styled(mediumIcon)``;
export const RecentConversations = styled.div`
  padding: 20px;
  width: calc(35%);
  background: ${({ theme }) => theme.colors.boxColor};
  border-right: 2px solid ${({ theme }) => theme.colors.hoverColor};

  @media (max-width: 1150px) {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    z-index: 96;
    transition: all 0.3s linear;
  }
`;
export const RecentConversationsBox = styled.div``;
export const RecentConversationsList = styled.div`
  overflow: auto;
  padding: 5px;
  max-height: calc(100vh - 275px);
  min-height: calc(100vh - 275px);
  margin-bottom: 20px;
`;
export const RecentConversationsActions = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
`;
export const BackButton = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const BackButtonIcon = styled(mediumIcon)``;
export const RecentConversationsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const TalkWithTeacherButton = styled(Button)`
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  width: 100%;
`;
export const TalkWithTeacherButtonLabel = styled(paragraph)``;
export const TalkWithTeacher = styled.div``;
