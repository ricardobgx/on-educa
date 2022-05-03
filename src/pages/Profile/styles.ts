import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';

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
  min-height: calc(100vh - 220px);
  position: relative;
  overflow: hidden;

  @media (max-width: 1150px) {
    min-height: unset;
    max-height: unset;
  }
`;
export const PeopleDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media (max-width: 1150px) {
    margin-top: 50px;
  }
`;
export const ProfileBanner = styled.div`
  min-height: 140px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.commonColor},
    ${({ theme }) => theme.colors.secondaryColor}
  );
  position: absolute;

  @media (max-width: 1150px) {
    min-height: 100px;
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
  width: calc(100% - 40px);
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

// Caracteristica da pessoa

export const PeopleName = styled(paragraph)`
  margin-bottom: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const TeachingTypeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SchoolGradeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SelectSocialDetails = styled.div`
  margin: 20px 5px;
`;
export const SocialDetails = styled.div`
  padding: 0 15px;
`;
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
