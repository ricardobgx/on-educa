import React from 'react';
import {
  CancelCreateInterativeRoomButton,
  CancelCreateInterativeRoomButtonLabel,
  CreateInterativeRoomButton,
  CreateInterativeRoomButtonLabel,
  NewInterativeRoomActionsBox,
} from './styles';

const NewInterativeRoomActions: React.FC = () => {
  return (
    <NewInterativeRoomActionsBox>
      <CancelCreateInterativeRoomButton className="block-shadow-button secondary-action bd-rd-20">
        <CancelCreateInterativeRoomButtonLabel>
          Cancelar
        </CancelCreateInterativeRoomButtonLabel>
      </CancelCreateInterativeRoomButton>
      <CreateInterativeRoomButton className="block-shadow-button main-action bd-rd-20">
        <CreateInterativeRoomButtonLabel>Criar</CreateInterativeRoomButtonLabel>
      </CreateInterativeRoomButton>
    </NewInterativeRoomActionsBox>
  );
};

export default NewInterativeRoomActions;
