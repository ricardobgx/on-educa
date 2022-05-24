import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ConfirmQuitDuelBackground = styled.div`
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
export const ConfirmQuitDuelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
`;
export const ConfirmQuitDuelLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
  text-align: center;
`;
export const ConfirmQuitDuelButton = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export const QuitButton = styled(ConfirmQuitDuelButton)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const CancelButton = styled(ConfirmQuitDuelButton)`
  margin: 20px 0px 10px 0px;
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  color: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
`;
export const ButtonLabel = styled(paragraph)``;
