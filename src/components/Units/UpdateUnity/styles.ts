import styled from 'styled-components';
import { inputText, paragraph, smallIcon } from '../../../components';

export const UpdateUnityBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 96;
  animation: fadeIn 0.2s linear;
`;
export const UpdateUnityBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  position: relative;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
`;
export const CloseUpdateUnityButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 50px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
export const CloseUpdateUnityIcon = styled(smallIcon)`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UpdateUnityLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const UpdateUnityInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  border-radius: 5px;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
`;
export const CreateUnityButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: 100%;
  cursor: pointer;
`;
export const CreateUnityButtonLabel = styled(paragraph)``;
