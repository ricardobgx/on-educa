import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DeleteContentBackground = styled.div`
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
export const DeleteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  position: relative;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
`;
export const CloseDeleteContentButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
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
export const CloseDeleteContentIcon = styled(smallIcon)`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeleteContentLabel = styled(paragraph)`
  font-weight: bold;
`;
export const DeleteContentWarningLabel = styled(paragraph)`
  margin: 20px 0;
  text-align: center;
`;
export const DeleteContentActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CancelDeleteContentButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 10px);
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const CancelDeleteContentButtonLabel = styled(paragraph)``;

export const DeleteContentButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColors.secondaryColor};
  background: ${({ theme }) => theme.flagColors.redColor};
  width: calc(50% - 10px);
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const DeleteContentButtonLabel = styled(paragraph)``;
