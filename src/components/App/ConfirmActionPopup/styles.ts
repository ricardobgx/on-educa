import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ConfirmActionPopupBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 97;

  position: fixed;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.boxShadowColor};
`;
export const ConfirmActionPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  max-width: 400px;
  padding: 20px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};

  font-weight: bold;

  position: relative;
`;
export const CloseConfirmActionPopupButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 25px;
  height: 25px;

  border: none;

  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  background: ${({ theme }) => theme.colors.mainColor};

  border-radius: 50%;
`;
export const ConfirmActionPopupLabel = styled(paragraph)`
  text-align: center;
  padding: 0 20px;
`;
export const ConfirmActionPopupActions = styled.div`
  display: flex;
  gap: 20px;
`;
export const ConfirmActionPopupAction = styled(Button)`
  padding: 0 20px;
`;
export const ConfirmActionPopupActionLabel = styled(paragraph)``;
