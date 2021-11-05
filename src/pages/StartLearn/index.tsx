import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../components';
import {
  LearnOptionBox,
  LearnOptionBoxLabel,
  LearnOptionBoxRequiredFieldLabel,
  LearnOptionSelect,
  LearnOptionSelectOption,
  LearnSettings,
  LearnSettingsBox,
  LearnSettingsBoxLabel,
  PageBox,
  StartLearnBox,
  StartLearnButton,
  StartLearnButtonLabel,
} from './styles';

const StartLearn = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <StartLearnBox>
          <SectionLabel label="Comece a estudar" backLink="/home" />

          <LearnSettings>
            <LearnSettingsBox>
              <LearnSettingsBoxLabel>
                Nível de aprendizagem
              </LearnSettingsBoxLabel>

              <LearnOptionBox>
                <LearnOptionBoxLabel>
                  Selecione seu ensino
                  <LearnOptionBoxRequiredFieldLabel>
                    *
                  </LearnOptionBoxRequiredFieldLabel>
                </LearnOptionBoxLabel>
                <LearnOptionSelect value="Ensino Médio">
                  <LearnOptionSelectOption value="Ensino Fundamental">
                    Ensino Fundamental
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="Ensino Médio">
                    Ensino Médio
                  </LearnOptionSelectOption>
                </LearnOptionSelect>
              </LearnOptionBox>

              <LearnOptionBox>
                <LearnOptionBoxLabel>
                  Selecione sua série
                  <LearnOptionBoxRequiredFieldLabel>
                    *
                  </LearnOptionBoxRequiredFieldLabel>
                </LearnOptionBoxLabel>
                <LearnOptionSelect value="1º ano">
                  <LearnOptionSelectOption value="1º ano">
                    1º ano
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="2º ano">
                    2º ano
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="3º ano">
                    3º ano
                  </LearnOptionSelectOption>
                </LearnOptionSelect>
              </LearnOptionBox>
            </LearnSettingsBox>

            <LearnSettingsBox>
              <LearnSettingsBoxLabel>
                Foco da aprendizagem
              </LearnSettingsBoxLabel>

              <LearnOptionBox>
                <LearnOptionBoxLabel>
                  Selecione a disciplina
                  <LearnOptionBoxRequiredFieldLabel>
                    *
                  </LearnOptionBoxRequiredFieldLabel>
                </LearnOptionBoxLabel>
                <LearnOptionSelect value="Ensino Médio">
                  <LearnOptionSelectOption value="Ensino Fundamental">
                    Ensino Fundamental
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="Ensino Médio">
                    Ensino Médio
                  </LearnOptionSelectOption>
                </LearnOptionSelect>
              </LearnOptionBox>

              <LearnOptionBox>
                <LearnOptionBoxLabel>Selecione a unidade</LearnOptionBoxLabel>
                <LearnOptionSelect value="Ensino Médio">
                  <LearnOptionSelectOption value="Ensino Fundamental">
                    Ensino Fundamental
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="Ensino Médio">
                    Ensino Médio
                  </LearnOptionSelectOption>
                </LearnOptionSelect>
              </LearnOptionBox>

              <LearnOptionBox>
                <LearnOptionBoxLabel>Selecione o conteúdo</LearnOptionBoxLabel>
                <LearnOptionSelect value="Ensino Médio">
                  <LearnOptionSelectOption value="Ensino Fundamental">
                    Ensino Fundamental
                  </LearnOptionSelectOption>
                  <LearnOptionSelectOption value="Ensino Médio">
                    Ensino Médio
                  </LearnOptionSelectOption>
                </LearnOptionSelect>
              </LearnOptionBox>
            </LearnSettingsBox>
          </LearnSettings>

          <StartLearnButton to="/contents/12345">
            <StartLearnButtonLabel>Começar</StartLearnButtonLabel>
          </StartLearnButton>
        </StartLearnBox>
      </PageBox>
    </Page>
  );
};

export default StartLearn;
