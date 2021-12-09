import React from 'react';
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
} from './styles';

interface IProfileCardProps {
  name: string;
  schoolGrade: number;
  profilePicture: string;
}

const ProfileCard = (props: IProfileCardProps): JSX.Element => {
  const { name, profilePicture, schoolGrade } = props;

  const isOwner = false;
  const isFriend = true;

  return (
    <Container>
      <UserInfo>
        <UserPicture src={profilePicture} />
        <UserInfoBox>
          <UserName>{name}</UserName>
          <UserSchoolGrade>{schoolGrade}º ano</UserSchoolGrade>
        </UserInfoBox>
      </UserInfo>
      {isOwner ? (
        <>
          <UpdateAccountButton>
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
