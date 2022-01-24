import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 20px;

  @media (max-width: 1150px) {
    margin-bottom: 20px;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserReference = styled.div`
  display: flex;
`;
export const UserName = styled(paragraph)`
  font-weight: bold;
`;
export const UserSchoolGrade = styled(paragraph)``;
export const UserTeachingType = styled(paragraph)``;
export const ProfileCardButton = styled.button`
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  min-height: 40px;
  margin-top: 10px;
`;
export const UpdateAccountButton = styled(Link)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  min-height: 40px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UpdateAccountButtonLabel = styled(paragraph)``;
export const AddFriendButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
`;
export const AddFriendButtonLabel = styled(paragraph)``;
export const DeleteFriendButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
`;
export const DeleteFriendButtonLabel = styled(paragraph)``;
export const SendMessageButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
`;
export const SendMessageButtonLabel = styled(paragraph)``;
