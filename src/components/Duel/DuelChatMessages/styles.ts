import styled from 'styled-components';

export const DuelChatMessagesBox = styled.div`
  width: 100%;
`;
export const DuelChatMessagesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  min-height: calc(100vh - 280px);
  max-height: calc(100vh - 280px);
  overflow-y: auto;
  overflow-x: hidden;
`;
