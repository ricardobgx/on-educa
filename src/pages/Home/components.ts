import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 2.5rem;
`;

export const PageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  margin: .75rem;
`;

export const HomeActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: .75rem 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const HomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;