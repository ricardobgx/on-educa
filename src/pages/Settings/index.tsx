import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import { themes } from '../../static/themes';
import { ThemeType } from '../../types/ThemeType';
import {
  PageBox,
  SelectedThemeButtonIcon,
  SelectThemeButton,
  SettingsBox,
  SettingsBoxLabel,
  ThemeSettings,
  ThemesList,
} from './styles';

const Settings = (): JSX.Element => {
  const setTheme = (themeType: number): void => {
    window.localStorage.setItem('theme', themeType.toString());
    window.location.reload();
  };

  const selectedTheme =
    window.localStorage.getItem('theme') || ThemeType.BLUE.toString();

  const selectedThemeNumber = Number(selectedTheme);

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Configurações" backLink="/home" />
        <SettingsBox>
          <ThemeSettings>
            <SettingsBoxLabel>Selecione o tema</SettingsBoxLabel>
            <ThemesList>
              {themes.map((theme) => (
                <SelectThemeButton
                  color={theme.previewColor}
                  onClick={() => setTheme(theme.themeType)}
                >
                  {selectedThemeNumber === theme.themeType && (
                    <SelectedThemeButtonIcon className="fas fa-check" />
                  )}
                </SelectThemeButton>
              ))}
            </ThemesList>
          </ThemeSettings>
        </SettingsBox>
      </PageBox>
    </Page>
  );
};

export default Settings;
