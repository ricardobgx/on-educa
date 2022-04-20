import React from 'react';
import theme from '../../../global/styles/theme';
import {
  ChatPeopleIsOnline,
  ChatPeoplePictureBox,
  ChatPeoplePictureImg,
} from './styles';

interface IChatPeoplePictureProps {
  profilePicturePath: string;
  isOnline: boolean;
}

const ChatPeoplePicture = (props: IChatPeoplePictureProps): JSX.Element => {
  const { profilePicturePath, isOnline } = props;

  return (
    <ChatPeoplePictureBox>
      <ChatPeoplePictureImg src={profilePicturePath} />
      <ChatPeopleIsOnline
        color={
          isOnline
            ? theme.similarColors.rightQuestion
            : theme.colors.questionTextColor
        }
      />
    </ChatPeoplePictureBox>
  );
};

export default ChatPeoplePicture;
