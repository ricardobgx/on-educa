import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import NewInterativeRoomActions from '../../components/NewInterativeRoom/NewInterativeRoomActions';
import NewInterativeRoomSetting from '../../components/NewInterativeRoom/NewInterativeRoomSetting';
import { NewInterativeRoomBox, NewInterativeRoomSettings } from './styles';

const NewInterativeRoom: React.FC = () => {
  return (
    <NewInterativeRoomBox>
      <SectionLabel label="Nova sala interativa" backLink="/interative-rooms" />
      <NewInterativeRoomSettings>
        <NewInterativeRoomSetting
          label="Participantes por equipe"
          options={[1, 2, 4, 8]}
          optionsLabel="aluno(s)"
        />
        <NewInterativeRoomSetting
          label="Tempo para responder"
          options={[5, 10, 15, 20]}
          optionsLabel="minuto(s)"
        />
      </NewInterativeRoomSettings>
      <NewInterativeRoomActions />
    </NewInterativeRoomBox>
  );
};

export default NewInterativeRoom;
