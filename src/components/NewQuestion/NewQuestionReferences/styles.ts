import styled from 'styled-components';

export const NewQuestionReferencesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vw;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  width: calc(40vw - 60px);
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
  }
`;
