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

/* Templates */

export const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Page Question box */

export const EditQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

/* Main details (name and reference of Question, video) */

export const EditQuestionMainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  height: 30vw;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
    height: unset;
  }
`;

/* Name and reference of Question */

export const EditQuestionNameAndReference = styled(FlexColumnBox)`
  width: calc(40vw - 60px);
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
