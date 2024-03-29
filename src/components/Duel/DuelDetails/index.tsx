import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { SmallMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  DuelDetailsBox,
  DuelDetailsLabel,
  Settings,
  SettingsBox,
  SettingsBoxLabel,
  SettingsBoxNumber,
  SettingsBoxIcon,
  EditDuelDetailsButton,
  EditDuelDetailsButtonLabel,
  EditDuelDetailsButtonIcon,
  CloseDetailsButton,
  CloseDetailsButtonIcon,
  DuelDetailsBackground,
} from './styles';

interface IDuelDetailsProps {
  duel: IDuel;
  setShowDuelDetails: (value: boolean) => void;
}

const DuelDetails = (props: IDuelDetailsProps): JSX.Element => {
  const { duel, setShowDuelDetails } = props;
  const { code, duelRound } = duel;
  const { maxGroupParticipants, timeForQuestion, questionsPerContent } =
    duelRound;

  const { theme } = useSelector((store: RootState) => store);

  return (
    <DuelDetailsBackground>
      <DuelDetailsBox className="with-shadow bd-rd-30">
        <CloseDetailsButton
          onClick={() => {
            setShowDuelDetails(false);
          }}
        >
          <CloseDetailsButtonIcon className="fas fa-times" />
        </CloseDetailsButton>
        <DuelDetailsLabel>Detalhes</DuelDetailsLabel>
        <Settings>
          <SettingsBox className="bd-rd-30">
            <SettingsBoxLabel>
              <SmallMaterialIconRound
                icon="pin"
                color={theme.colors.textColors.primaryColor}
              />
              Código
            </SettingsBoxLabel>
            <SettingsBoxNumber>{code}</SettingsBoxNumber>
          </SettingsBox>
          <SettingsBox className="bd-rd-30">
            <SettingsBoxLabel>
              <SettingsBoxIcon className="fas fa-users" />
              Participantes por equipe
            </SettingsBoxLabel>
            <SettingsBoxNumber>{maxGroupParticipants}</SettingsBoxNumber>
          </SettingsBox>
          <SettingsBox className="bd-rd-30">
            <SettingsBoxLabel>
              <SettingsBoxIcon className="fas fa-file-alt" />
              Questões por conteúdo
            </SettingsBoxLabel>
            <SettingsBoxNumber>{questionsPerContent}</SettingsBoxNumber>
          </SettingsBox>
          <SettingsBox className="bd-rd-30">
            <SettingsBoxLabel>
              <SettingsBoxIcon className="fas fa-clock" />
              Tempo para questão
            </SettingsBoxLabel>
            <SettingsBoxNumber>{timeForQuestion}</SettingsBoxNumber>
          </SettingsBox>
        </Settings>
        <EditDuelDetailsButton className="block-shadow-button main-action bd-rd-30">
          <EditDuelDetailsButtonLabel>Editar</EditDuelDetailsButtonLabel>
          <EditDuelDetailsButtonIcon className="fas fa-pen" />
        </EditDuelDetailsButton>
      </DuelDetailsBox>
    </DuelDetailsBackground>
  );
};

export default DuelDetails;
