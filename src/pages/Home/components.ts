import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const HomeActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(3 * 12rem + 3 * 40px); */

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const HomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: calc(((100vh - 265px) / 2 + 40px) * 3);

  @media (max-width: 1150px) {
    min-width: unset;
  }
`;
export const HomePerformance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const HomePerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: calc(100vh - 225px);
  width: 100%;

  & > * {
    margin: 0 20px;
  }

  @media (max-width: 1150px) {
    width: 100%;
    height: unset;
  }
`;
export const AchievementsAndDailyGoal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  height: calc(((100vh - 185px) / 2));
  padding: 20px;

  @media (max-width: 900px) {
    height: unset;
  }
`;
