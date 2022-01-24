import React from 'react';
import {
  AttachmentCardBox,
  AttachmentCardIcon,
  AttachmentCardLabel,
} from './styles';

interface IAttachmentCardProps {
  label: string;
  link: string;
}

const AttachmentCard = (props: IAttachmentCardProps): JSX.Element => {
  const { label, link } = props;

  return (
    <AttachmentCardBox href={link} className="with-shadow bd-rd-5">
      <AttachmentCardIcon className="fas fa-paperclip" />
      <AttachmentCardLabel>{label}</AttachmentCardLabel>
    </AttachmentCardBox>
  );
};

export default AttachmentCard;
