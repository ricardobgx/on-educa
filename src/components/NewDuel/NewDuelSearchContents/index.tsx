import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useSelector } from 'react-redux';
import { getContents } from '../../../functions/content';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSuppliesBox,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
} from '../../App/Supplies/styles';
import NewDuelContentFoundCard from '../NewDuelContentFoundCard';
import {
  ContentsFound,
  NewDuelSearchContentsBox,
  ContentsFoundList,
  SearchContentsButton,
} from './styles';

export interface INewDuelSearchContentsProps {
  contentsName: string;
  setContentsName: (value: string) => void;
  contentsFound: IContent[];
  setContentsFound: (value: IContent[]) => void;
  selectedContents: IContent[];
  setSelectedContents: (value: IContent[]) => void;
}

const NewDuelSearchContents = (
  props: INewDuelSearchContentsProps,
): JSX.Element => {
  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  /* Props */

  const {
    contentsName,
    setContentsName,
    contentsFound,
    setContentsFound,
    selectedContents,
    setSelectedContents,
  } = props;

  const clearContentsFound = (): void => {
    setContentsFound([]);
    setContentsName('');
  };

  const showContentsNotSelected = (contents: IContent[]): void => {
    setContentsFound(
      contents.filter(
        (content) => !selectedContents.find((c) => c.id === content.id),
      ),
    );
  };

  const searchContents = (): void => {
    getContents(OnEducaAPI, showContentsNotSelected, token, contentsName);
  };

  return (
    <ClickAwayListener onClickAway={() => clearContentsFound()}>
      <NewDuelSearchContentsBox>
        <SearchSuppliesBox
          style={{
            marginRight: 0,
            borderRadius: contentsFound.length > 0 ? '20px 20px 0 0' : '',
          }}
        >
          <SearchSuppliesInput
            value={contentsName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setContentsName(event.target.value)
            }
            onFocus={() => {
              searchContents();
            }}
            onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.key === 'Enter') searchContents();
            }}
            type="text"
            placeholder="Pesquisar conteúdo (exemplo: Substantivos)"
          />
          <ClearSearchSuppliesInputButton onClick={() => clearContentsFound()}>
            <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
          </ClearSearchSuppliesInputButton>
          <SearchContentsButton onClick={() => searchContents()}>
            <SearchSuppliesButtonIcon className="fas fa-search" />
          </SearchContentsButton>
        </SearchSuppliesBox>
        {contentsFound.length > 0 && (
          <ContentsFound>
            <ContentsFoundList>
              {contentsFound.map((contentFound) => (
                <NewDuelContentFoundCard
                  content={contentFound}
                  unity={contentFound.unity}
                  selectedContents={selectedContents}
                  setSelectedContents={setSelectedContents}
                  clearContentsFound={clearContentsFound}
                />
              ))}
            </ContentsFoundList>
          </ContentsFound>
        )}
      </NewDuelSearchContentsBox>
    </ClickAwayListener>
  );
};

export default NewDuelSearchContents;
