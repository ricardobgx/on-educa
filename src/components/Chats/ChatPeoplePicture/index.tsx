import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
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

  const { theme } = useSelector((store: RootState) => store);

  return (
    <ChatPeoplePictureBox>
      <ChatPeoplePictureImg src={profilePicturePath} />
      <ChatPeopleIsOnline
        color={
          isOnline
            ? theme.flagColors.greenColor
            : theme.colors.textColors.secondaryColor
        }
      />
    </ChatPeoplePictureBox>
  );
};

export default ChatPeoplePicture;
