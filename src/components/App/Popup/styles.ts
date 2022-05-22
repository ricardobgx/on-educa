import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 97;
  animation: fadeIn 0.2s linear;
`;
export const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;

  position: relative;

  background: ${({ theme }) => theme.colors.boxColor};

  max-width: calc(100vw - 80px);

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ClosePopupButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColors.secondaryColor};
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  cursor: pointer;
  padding: 2px;

  & span {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
`;
export const PopupTitle = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
