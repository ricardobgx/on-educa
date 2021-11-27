import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 20px;
  margin-bottom: 0px;

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
export const UserName = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const UserSchoolGrade = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ProfileCardButton = styled.button`
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  min-height: 40px;
  margin-top: 10px;
`;
export const UpdateAccountButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const UpdateAccountButtonLabel = styled(paragraph)``;
export const AddFriendButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const AddFriendButtonLabel = styled(paragraph)``;
export const DeleteFriendButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
`;
export const DeleteFriendButtonLabel = styled(paragraph)``;
export const SendMessageButton = styled(ProfileCardButton)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const SendMessageButtonLabel = styled(paragraph)``;
