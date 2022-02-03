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
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
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
`;
export const SelectThemeButton = styled.button`
  width: 35px;
  height: 35px;
  background: ${({ color }) => color};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.whiteColor};
  margin-right: 10px;
  cursor: pointer;
`;
export const SelectedThemeButtonIcon = styled(smallIcon)`
  color: ${({ theme }) => theme.colors.whiteColor};
`;
