import styled from 'styled-components';

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
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const UserDetailsBox = styled.div`
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
export const ProfileBanner = styled.img`
  height: 140px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.commonColor},
    ${({ theme }) => theme.colors.secondaryColor}
  );

  @media (max-width: 1150px) {
    height: 100px;
  }
`;
export const UserPictureBox = styled.div`
  width: max-content;
  height: max-content;
  margin: 20px;
  margin-top: 0;
  padding: 5px;
  padding-bottom: 0;
  background: ${({ theme }) => theme.colors.boxColor};
  transform: translateY(-50%);
  border-radius: 50%;
`;
export const UserPicture = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;

  @media (max-width: 1150px) {
    width: 90px;
    height: 90px;
  }
`;
export const MainDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PerformanceDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const PerformanceDetailsBox = styled.div`
  width: width: calc(100% - 40px);
  margin: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const WeeklyPerformanceSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
