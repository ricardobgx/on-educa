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
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-height: calc(100vh - 95px);
  max-height: calc(100vh - 95px);
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 100%;
    min-height: unset;
    max-height: unset;
  }
`;
export const MainDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WeeklyPerformanceSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
