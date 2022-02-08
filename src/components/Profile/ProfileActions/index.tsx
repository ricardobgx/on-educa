import React from 'react';
import { isPeopleLogged } from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import { SmallMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import FriendActions from '../FriendActions';
import {
  ProfileActionsBox,
  EditProfileButton,
  EditProfileButtonLabel,
} from './styles';

interface IProfileActionsProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
}

const ProfileActions = (props: IProfileActionsProps): JSX.Element => {
  const { people, loggedPeople, token } = props;

  return (
    <ProfileActionsBox>
      {isPeopleLogged(loggedPeople.id, people.id as string) ? (
        <EditProfileButton to="/update-profile" className="with-shadow bd-rd-5">
          <EditProfileButtonLabel>Editar perfil</EditProfileButtonLabel>
          <SmallMaterialIconRound color="" icon="mode_edit" />
        </EditProfileButton>
      ) : (
        <FriendActions
          loggedPeople={loggedPeople}
          people={people}
          token={token}
        />
      )}
    </ProfileActionsBox>
  );
};

export default ProfileActions;
