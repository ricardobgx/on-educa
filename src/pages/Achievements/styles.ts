import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;
`;
export const AchievementsList = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  margin: 20px;
`;
export const AchievementsListBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  overflow: auto;
  padding: 5px;
`;
