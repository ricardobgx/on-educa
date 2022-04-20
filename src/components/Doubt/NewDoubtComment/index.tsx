import React, { useState } from 'react';
import { createDoubtComment } from '../../../functions/doubtComment';
import OnEducaAPI from '../../../services/api';
import {
  NewDoubtCommentBox,
  NewDoubtCommentInput,
  NewDoubtCommentButton,
  NewDoubtCommentButtonIcon,
} from './styles';

interface INewDoubtCommentProps {
  loggedPeopleId: string;
  doubtId: string;
  token: string;
  getDoubtCommentsAction: () => void;
}

const NewDoubtComment = (props: INewDoubtCommentProps): JSX.Element => {
  const { loggedPeopleId, doubtId, token, getDoubtCommentsAction } = props;
  const [content, setContent] = useState('');

  const createDoubtCommentAction = async (): Promise<void> => {
    if (!content.trim()) {
      return;
    }

    await createDoubtComment(
      OnEducaAPI,
      {
        content,
        peopleId: loggedPeopleId,
        doubtId,
      },
      token,
    ).then(() => {
      getDoubtCommentsAction();
      setContent('');
    });
  };

  return (
    <NewDoubtCommentBox>
      <NewDoubtCommentInput
        type="text"
        placeholder="Escreva seu comentário"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            createDoubtCommentAction();
          }
        }}
      />
      <NewDoubtCommentButton onClick={() => createDoubtCommentAction()}>
        <NewDoubtCommentButtonIcon className="bi bi-send" />
      </NewDoubtCommentButton>
    </NewDoubtCommentBox>
  );
};

export default NewDoubtComment;
