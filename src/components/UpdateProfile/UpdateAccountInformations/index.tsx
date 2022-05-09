import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  UpdateProfileSectionBoxLabel,
  UpdateProfileSection,
  UpdateProfileSectionBox,
  UpdateProfileSectionLabel,
  UpdateProfileSectionsBox,
  UpdateProfileButton,
  UpdateProfileSectionBoxActions,
  UpdateProfileButtonLabel,
} from '../styles';
import SectionInDevelopment from '../../App/InDevelopment/SectionInDevelopment';
import { ActionCreators, RootState } from '../../../store';
import { clearPeopleVariables, deletePeople } from '../../../functions/people';
import OnEducaAPI from '../../../services/api';

export interface IUpdateAccountInformationsProps {
  test: string;
}

const UpdateAccountInformations = (): // props: IUpdateAccountInformationsProps,
JSX.Element => {
  const { aplication, people } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const dispatch = useDispatch();

  const {
    showFloatNotification,
    showConfirmActionPopup,
    loadToken,
    logoutPeople,
  } = bindActionCreators(ActionCreators, dispatch);

  const deletePeopleAccount = (): void => {
    deletePeople(
      OnEducaAPI,
      people.id,
      token,
      () => {
        clearPeopleVariables();
        logoutPeople();
        loadToken('');
      },
      () => showFloatNotification('Ocorreu um erro ao excluir a conta'),
    );
  };

  return (
    <UpdateProfileSection className="with-shadow bd-rd-30">
      <UpdateProfileSectionLabel>Segurança da conta</UpdateProfileSectionLabel>
      <UpdateProfileSectionsBox>
        <UpdateProfileSectionBox>
          <UpdateProfileSectionBoxLabel>Senha</UpdateProfileSectionBoxLabel>
          {/* <UpdateProfileSectionBoxUpdateTextActions>
            <UpdateProfileInputText
              className="bd-rd-20"
              type="password"
              value="ricardo123"
            />
            <UpdateProfileButton className="block-shadow-button secondary-action bd-rd-20">
              <SmallMaterialIconOutlined color="" icon="edit" />
            </UpdateProfileButton>
          </UpdateProfileSectionBoxUpdateTextActions> */}
          <SectionInDevelopment />
        </UpdateProfileSectionBox>
        <UpdateProfileSectionBox>
          <UpdateProfileSectionBoxLabel>
            Tempo logado
          </UpdateProfileSectionBoxLabel>
          {/* <UpdateProfileSelect className="shadow-select bd-rd-20">
            <UpdateProfileOption value={7}>7 dias</UpdateProfileOption>
            <UpdateProfileOption value={15}>15 dias</UpdateProfileOption>
            <UpdateProfileOption value={30}>30 dias</UpdateProfileOption>
          </UpdateProfileSelect> */}
          <SectionInDevelopment />
        </UpdateProfileSectionBox>
        <UpdateProfileSectionBox>
          <UpdateProfileSectionBoxLabel>
            Zona perigosa
          </UpdateProfileSectionBoxLabel>
          <UpdateProfileSectionBoxActions>
            {/* <UpdateProfileButton className="block-shadow-button secondary-action bd-rd-20">
              <UpdateProfileButtonLabel>
                Desativar conta
              </UpdateProfileButtonLabel>
            </UpdateProfileButton> */}
            <SectionInDevelopment />
            <UpdateProfileButton
              className="block-shadow-button main-action bd-rd-20"
              onClick={() =>
                showConfirmActionPopup(
                  'Tem certeza que quer excluir sua conta? Todos os seus dados serão perdidos!',
                  deletePeopleAccount,
                )
              }
            >
              <UpdateProfileButtonLabel>Excluir conta</UpdateProfileButtonLabel>
            </UpdateProfileButton>
          </UpdateProfileSectionBoxActions>
        </UpdateProfileSectionBox>
      </UpdateProfileSectionsBox>
    </UpdateProfileSection>
  );
};

export default UpdateAccountInformations;
