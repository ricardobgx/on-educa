import styled from 'styled-components';
import { smallIcon } from '../../global/styles/components/iconComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

// Conteiner e templates

export const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const SettingBox = styled.div`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const SettingsBoxLabel = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 20px;
`;

// Tema

export const ThemeSettings = styled(SettingBox)``;
export const ThemesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

interface SelectThemeButtonProps {
  colors: string[];
}

export const SelectThemeButton = styled.button<SelectThemeButtonProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 3px;
  border: none;
  cursor: pointer;
  position: relative;
  background: none;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 96;

  &.selected {
    border-color: ${({ theme }) => theme.colors.textColor};
  }

  ::before {
    content: '';
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.boxColor};
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.boxShadowColor};
    background: ${({ colors }) => colors[0]};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  ::after {
    content: '';
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 50%;
    background: ${({ colors }) => colors[1] || ''};
    position: absolute;
    top: 3px;
    left: 3px;
    clip: rect(0px, 15px, 30px, 0px);
    z-index: -1;
  }
`;
export const SelectedThemeButtonIcon = styled(smallIcon)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  position: absolute;
  top: -10%;
  right: -10%;

  color: #1b1b1b;
  background: ${({ theme }) => theme.colors.whiteColor};

  font-size: 8px;

  height: 15px;
  width: 15px;

  z-index: 1000;

  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.boxShadowColor};
`;
