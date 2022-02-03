import styled from 'styled-components';

export const QuestionsListBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  margin-top: 15px;
`;
export const QuestionCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: auto;
  min-height: calc(100vh - 300px);
  max-height: calc(100vh - 300px);
`;
