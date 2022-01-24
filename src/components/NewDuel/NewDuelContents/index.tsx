/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import NewDuelSearchContents, {
  INewDuelSearchContentsProps,
} from '../NewDuelSearchContents';
import NewDuelSelectedContents, {
  INewDuelSelectedContentsProps,
} from '../NewDuelSelectedContents';
import { NewDuelContentsBox, NewDuelContentsLabel } from './styles';

interface INewDuelContentsProps {
  newDuelSearchContentsProps: INewDuelSearchContentsProps;
  newDuelSelectedContentsProps: INewDuelSelectedContentsProps;
}

const NewDuelContents = (props: INewDuelContentsProps): JSX.Element => {
  const { newDuelSearchContentsProps, newDuelSelectedContentsProps } = props;

  return (
    <NewDuelContentsBox className="with-shadow bd-rd-5">
      <NewDuelContentsLabel>Selecionar conteúdos</NewDuelContentsLabel>
      <NewDuelSearchContents {...newDuelSearchContentsProps} />
      <NewDuelContentsLabel>Conteúdos selecionados</NewDuelContentsLabel>
      <NewDuelSelectedContents {...newDuelSelectedContentsProps} />
    </NewDuelContentsBox>
  );
};

export default NewDuelContents;
