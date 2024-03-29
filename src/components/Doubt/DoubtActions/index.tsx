import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteDoubt, updateDoubt } from '../../../functions/doubt';
import OnEducaAPI from '../../../services/api';
import { TDoubtStatus } from '../../../types/TDoubtStatus';
import {
  DoubtActionsBox,
  UpdateDoubtStatusButton,
  UpdateDoubtStatusButtonIcon,
  UpdateDoubtStatusButtonLabel,
  DeleteDoubtButton,
  DeleteDoubtButtonIcon,
  DeleteDoubtButtonLabel,
} from './styles';

interface IDoubtActionsProps {
  doubtId: string;
  doubtStatus: number;
  contentId: string;
  token: string;
  getDoubtAction: () => void;
}

const DoubtActions = (props: IDoubtActionsProps): JSX.Element => {
  const { doubtId, doubtStatus, contentId, token, getDoubtAction } = props;

  const pageHistory = useHistory();

  const setDoubtAsSolved = async (): Promise<void> => {
    await updateDoubt(
      OnEducaAPI,
      doubtId,
      { status: TDoubtStatus.SOLVED },
      token,
      () => getDoubtAction(),
    );
  };

  const setDoubtAsPending = async (): Promise<void> => {
    await updateDoubt(
      OnEducaAPI,
      doubtId,
      { status: TDoubtStatus.PENDING },
      token,
      () => getDoubtAction(),
    );
  };

  const deleteDoubtAction = async (): Promise<void> => {
    await deleteDoubt(OnEducaAPI, doubtId, token, () =>
      pageHistory.push(`/contents/${contentId}`),
    );
  };

  return (
    <DoubtActionsBox>
      {doubtStatus === TDoubtStatus.PENDING ? (
        <UpdateDoubtStatusButton onClick={() => setDoubtAsSolved()}>
          <UpdateDoubtStatusButtonIcon className="fas fa-check" />
          <UpdateDoubtStatusButtonLabel>Resolvida</UpdateDoubtStatusButtonLabel>
        </UpdateDoubtStatusButton>
      ) : (
        <UpdateDoubtStatusButton onClick={() => setDoubtAsPending()}>
          <UpdateDoubtStatusButtonIcon className="fas fa-exclamation" />
          <UpdateDoubtStatusButtonLabel>Pendente</UpdateDoubtStatusButtonLabel>
        </UpdateDoubtStatusButton>
      )}
      <DeleteDoubtButton onClick={() => deleteDoubtAction()}>
        <DeleteDoubtButtonIcon className="fas fa-trash" />
        <DeleteDoubtButtonLabel>Excluir</DeleteDoubtButtonLabel>
      </DeleteDoubtButton>
    </DoubtActionsBox>
  );
};

export default DoubtActions;
