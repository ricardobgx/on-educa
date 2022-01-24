import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ConfirmQuitPracticeBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  animation: 0.2s linear fadeIn;
  animation-fill-mode: forwards;
`;
export const ConfirmQuitPracticeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const ConfirmQuitPracticeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  text-align: center;
`;
export const ConfirmQuitPracticeButton = styled.button`
  height: 40px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export const QuitButton = styled(ConfirmQuitPracticeButton)`
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const CancelButton = styled(ConfirmQuitPracticeButton)`
  margin: 20px 0px 10px 0px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ButtonLabel = styled(paragraph)``;
