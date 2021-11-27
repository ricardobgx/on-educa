import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const MissionsList = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 20px;
  padding: 15px;
`;
export const MissionsListBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  overflow: auto;
  padding: 5px;
`;
