import React from 'react';
import {
  UpdateProfileSectionBoxLabel,
  UpdateProfileSection,
  UpdateProfileSectionBox,
  UpdateProfileSectionLabel,
  UpdateProfileSectionsBox,
  UpdateProfileSelect,
  UpdateProfileOption,
} from '../styles';
import UpdateProfileTextInputSection from '../UpdateProfileTextInputSection';

export interface IUpdateAccountInformationsProps {
  email: string;
  setEmail: (value: string) => void;
  newPassword: string;
  setNewPassword: (value: string) => void;
}

const UpdateAccountInformations = (
  props: IUpdateAccountInformationsProps,
): JSX.Element => {
  const { email, setEmail, newPassword, setNewPassword } = props;

  return (
    <UpdateProfileSection>
      <UpdateProfileSectionLabel>
        Informações da conta
      </UpdateProfileSectionLabel>
      <UpdateProfileSectionsBox>
        <UpdateProfileTextInputSection
          label="E-mail"
          inputType="email"
          value={email}
          setValue={setEmail}
        />
        <UpdateProfileTextInputSection
          label="Nova senha"
          inputType="password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <UpdateProfileSectionBox>
          <UpdateProfileSectionBoxLabel>
            Tempo logado
          </UpdateProfileSectionBoxLabel>
          <UpdateProfileSelect>
            <UpdateProfileOption value={7}>7 dias</UpdateProfileOption>
            <UpdateProfileOption value={15}>15 dias</UpdateProfileOption>
            <UpdateProfileOption value={30}>30 dias</UpdateProfileOption>
          </UpdateProfileSelect>
        </UpdateProfileSectionBox>
      </UpdateProfileSectionsBox>
    </UpdateProfileSection>
  );
};

export default UpdateAccountInformations;
