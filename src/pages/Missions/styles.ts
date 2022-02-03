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
  color: ${({ theme }) => theme.colors.textColor};
  margin: 15px;
`;
export const MissionsListBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 210px);
  max-height: calc(100vh - 210px);
  overflow: auto;
  padding: 5px;
`;
