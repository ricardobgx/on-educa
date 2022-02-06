import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../global/styles/components/buttonComponents';
import { paragraph } from '../../global/styles/components/textComponents';
import {
  mediumIcon,
  smallIcon,
} from '../../global/styles/components/iconComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const ProfileBox = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const ProfileDetailsBox = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  margin: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: calc(100vh - 95px);
  max-height: calc(100vh - 95px);

  @media (max-width: 1150px) {
    min-height: unset;
    max-height: unset;
  }
`;
export const PeopleDetails = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-60px);

  @media (max-width: 1150px) {
    transform: translateY(-50px);
  }
`;
export const ProfileBanner = styled.div`
  height: 140px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.commonColor},
    ${({ theme }) => theme.colors.secondaryColor}
  );
  position: relative;

  @media (max-width: 1150px) {
    height: 100px;
  }
`;
export const ProfileBannerImg = styled.img`
  height: 140px;
  width: 100%;
  border-radius: 5px 5px 0 0;

  @media (max-width: 1150px) {
    height: 100px;
  }
`;
export const PeoplePictureBox = styled.div`
  width: max-content;
  height: max-content;
  padding: 5px;
  padding-bottom: 0;
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 50%;
  position: relative;
`;
export const PeoplePicture = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 1150px) {
    width: 90px;
    height: 90px;
  }
`;
export const PerformanceDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: fixed;
  right: 20px;

  @media (max-width: 1150px) {
    width: 100%;
    position: relative;
    right: unset;
  }
`;
export const PerformanceDetailsHeader = styled.div`
  display: flex;
`;
export const PerformanceDetailsHeaderLabel = styled(paragraph)`
  margin-left: 8px;
  font-weight: bold;
`;
export const PerformanceDetailsBox = styled.div`
  width: width: calc(100% - 40px);
  margin: 20px;
`;
export const WeeklyPerformanceSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AppearenceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
`;
export const MainDetails = styled.div`
  margin: 25px;
`;

/* Acoes no perfil */

// Atualizar perfil

export const EditProfileButton = styled(Link)`
  padding: 0 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  min-height: 40px;
  max-height: 40px;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  cursor: pointer;
`;
export const EditProfileButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;

const FriendButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.boxColor};
`;
const FriendButtonLabel = styled(paragraph)`
  margin-right: 5px;

  @media (max-width: 400px) {
    display: none;
  }
`;

// Amigo

export const FriendActions = styled.div`
  display: flex;
`;
export const UnfriendButton = styled(FriendButton)`
  margin-left: 10px;
  color: ${({ theme }) => theme.similarColors.warningColor};
`;
export const UnfriendButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;

// Nao eh amigo

export const NoFriendActions = styled.div``;
export const AddFriendButton = styled(FriendButton)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const AddFriendButtonLabel = styled(FriendButtonLabel)`
  margin-right: 5px;
`;
export const AddFriendButtonIcon = styled(smallIcon)``;

// Caracteristica da pessoa

export const PeopleName = styled(paragraph)`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const TeachingTypeLabel = styled(paragraph)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SchoolGradeLabel = styled(paragraph)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SocialDetails = styled.div`
  margin: 20px 25px;
`;
export const SocialDetailsList = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SocialDetail = styled(Button)`
  background: none;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 96;

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.textColor};
    width: 0%;
    height: 3px;
    position: absolute;
    bottom: 0;
    right: 0%;
    border-radius: 5px;
    transition: all 0.2s linear;
  }

  &.selected-detail::before {
    left: 0%;
    right: unset;
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 50px;
  }

  @media (min-width: 900px) {
    & span,
    & i {
      display: none;
    }
  }
`;
export const SocialDetailLabel = styled(paragraph)`
  font-weight: bold;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const SocialDetailIcon = styled(mediumIcon)``;
export const EditImageButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

export const EditBannerButton = styled(EditImageButton)`
  right: 5px;
  top: 5px;
`;
export const EditPictureButton = styled(EditImageButton)`
  right: 0px;
  top: 5px;
`;
