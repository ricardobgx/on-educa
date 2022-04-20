import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
  & .circular-bar {
    position: fixed;
    bottom: 40px;
    right: 40px;
  }

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const DuelQuestionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
