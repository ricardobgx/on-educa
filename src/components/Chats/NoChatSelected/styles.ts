import styled from 'styled-components';

export const NoChatSelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 100%;

  gap: 60px;

  & svg {
    height: 320px;
    width: 432px;
  }
`;
export const StartChatLabel = styled.p`
  font-size: 20px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.textColor};
`;
