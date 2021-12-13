import React from 'react';
import {
  UpdateProfileActionsBox,
  CancelUpdateProfileButton,
  CancelUpdateProfileButtonLabel,
  ConfirmUpdateProfileButton,
  ConfirmUpdateProfileButtonLabel,
} from './styles';

const UpdateProfileActions = (): JSX.Element => {
  return (
    <UpdateProfileActionsBox>
      <CancelUpdateProfileButton>
        <CancelUpdateProfileButtonLabel>
          Cancelar
        </CancelUpdateProfileButtonLabel>
      </CancelUpdateProfileButton>
      <ConfirmUpdateProfileButton>
        <ConfirmUpdateProfileButtonLabel>
          Atualizar
        </ConfirmUpdateProfileButtonLabel>
      </ConfirmUpdateProfileButton>
    </UpdateProfileActionsBox>
  );
};

export default UpdateProfileActions;
