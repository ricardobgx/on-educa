import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import { setAplicationTheme } from '../../functions/people';
import { Page } from '../../global/styles/components/pageComponents';
import { themes } from '../../static/themes';
import { ActionCreators, RootState } from '../../store';
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
  const { theme: themeSelected } = useSelector((store: RootState) => store);

  const dispatch = useDispatch();
  const { loadTheme } = bindActionCreators(ActionCreators, dispatch);

  const setTheme = (theme: ITheme): void => {
    loadTheme(theme);
    setAplicationTheme(theme.themeType);
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Configurações" backLink="/" />
        <SettingsBox>
          <ThemeSettings className="with-shadow bd-rd-30">
            <SettingsBoxLabel>Selecione o tema</SettingsBoxLabel>
            <ThemesList>
              {themes.map((theme) => {
                return (
                  <SelectThemeButton
                    colors={theme.previewColors}
                    onClick={() => setTheme(theme)}
                  >
                    {themeSelected.themeType === theme.themeType && (
                      <SelectedThemeButtonIcon className="fas fa-check" />
                    )}
                  </SelectThemeButton>
                );
              })}
            </ThemesList>
          </ThemeSettings>
        </SettingsBox>
      </PageBox>
    </Page>
  );
};

export default Settings;
