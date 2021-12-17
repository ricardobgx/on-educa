import React from 'react';
import { isStudent } from '../../../functions/user';
import { IUser } from '../../../interfaces/IUser';
import { DEFAULT_TEACHING_TYPE } from '../../../static/defaultEntitiesValues';
import {
  Container,
  UserInfo,
  UserPicture,
  UserInfoBox,
  UserName,
  UserSchoolGrade,
  UpdateAccountButton,
  UpdateAccountButtonLabel,
  AddFriendButton,
  AddFriendButtonLabel,
  DeleteFriendButton,
  DeleteFriendButtonLabel,
  SendMessageButton,
  SendMessageButtonLabel,
  UserTeachingType,
  UserReference,
} from './styles';

interface IProfileCardProps {
  user: IUser;
  userType: string;
  isUserLogged: boolean;
}

const ProfileCard = (props: IProfileCardProps): JSX.Element => {
  const { user, userType, isUserLogged } = props;
  const {
    name,
    profilePicture,
    teachingType: userTeachingType,
    schoolGrade,
  } = user;

  const teachingType = isStudent(userType)
    ? schoolGrade.teachingType || DEFAULT_TEACHING_TYPE
    : userTeachingType;

  const isFriend = true;

  return (
    <Container>
      <UserInfo>
        <UserPicture src={profilePicture} />
        <UserInfoBox>
          <UserName>{name}</UserName>
          <UserReference>
            {isStudent(userType) && (
              <UserSchoolGrade>{schoolGrade.index}º ano</UserSchoolGrade>
            )}
            <UserTeachingType>{teachingType.title}</UserTeachingType>
          </UserReference>
        </UserInfoBox>
      </UserInfo>
      {isUserLogged ? (
        <>
          <UpdateAccountButton to="/update-profile">
            <UpdateAccountButtonLabel>Atualizar conta</UpdateAccountButtonLabel>
          </UpdateAccountButton>
        </>
      ) : (
        <>
          {!isFriend ? (
            <AddFriendButton>
              <AddFriendButtonLabel>
                Enviar pedido de amizade
              </AddFriendButtonLabel>
            </AddFriendButton>
          ) : (
            <DeleteFriendButton>
              <DeleteFriendButtonLabel>
                Desfazer amizade
              </DeleteFriendButtonLabel>
            </DeleteFriendButton>
          )}
          <SendMessageButton>
            <SendMessageButtonLabel>Enviar mensagem</SendMessageButtonLabel>
          </SendMessageButton>
        </>
      )}
    </Container>
  );
};

export default ProfileCard;
