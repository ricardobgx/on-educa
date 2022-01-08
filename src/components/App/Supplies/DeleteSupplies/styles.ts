import styled from 'styled-components';
import { Button } from '../../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const DeleteSuppliesBackground = styled.div`
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
export const DeleteSuppliesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  position: relative;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
`;
export const CloseDeleteSuppliesButton = styled.button`
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
export const CloseDeleteSuppliesIcon = styled(smallIcon)`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeleteSuppliesLabel = styled(paragraph)`
  font-weight: bold;
`;
export const DeleteSuppliesWarningLabel = styled(paragraph)`
  margin: 20px 0;
  text-align: center;
`;
export const DeleteSuppliesActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CancelDeleteSuppliesButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 10px);
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const CancelDeleteSuppliesButtonLabel = styled(paragraph)``;

export const DeleteSuppliesButton = styled(Button)`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  width: calc(50% - 10px);
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const DeleteSuppliesButtonLabel = styled(paragraph)``;
