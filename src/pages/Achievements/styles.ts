import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;
`;
export const AchievementsList = styled.div`
  margin: 15px;
`;
export const AchievementsListBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 210px);
  max-height: calc(100vh - 210px);
  overflow: auto;
  padding: 5px;
`;
