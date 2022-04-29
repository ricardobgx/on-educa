import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import {
  mediumIcon,
  smallIcon,
} from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelDetailsBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 96;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  animation: 0.2s fadeIn linear;
`;

export const DuelDetailsBox = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
`;
export const CloseDetailsButton = styled(Button)`
  width: 25px;
  height: 25px;
  min-height: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const CloseDetailsButtonIcon = styled(mediumIcon)``;
export const DuelDetailsLabel = styled(paragraph)`
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Settings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 900px) {
    & > div {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const SettingsBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  padding: 10px 15px;
  margin: 10px 0;
`;
export const SettingsBoxIcon = styled(smallIcon)`
  width: 20px;
  text-align: center;
  margin-right: 5px;
`;
export const SettingsBoxLabel = styled(paragraph)`
  display: flex;
  align-items: center;

  & span {
    width: 20px;
    text-align: center;
    margin-right: 5px;
  }
`;
export const SettingsBoxNumber = styled(paragraph)``;
export const EditDuelDetailsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  margin-top: 10px;
`;
export const EditDuelDetailsButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const EditDuelDetailsButtonIcon = styled(smallIcon)``;
