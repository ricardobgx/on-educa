import React from 'react';
import { useSelector } from 'react-redux';
import { getContents } from '../../../functions/content';
import { IContent } from '../../../interfaces/IContent';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import { DEFAULT_UNITY } from '../../../store/reducers/unity';
import NewDuelContentFoundCard from '../NewDuelContentFoundCard';
import {
  ContentsFound,
  NewDuelSearchContentsBox,
  SearchContentsBox,
  SearchContentsInput,
  SearchContentsButton,
  SearchContentsButtonIcon,
  ContentsFoundList,
  ClearContentsButton,
  ClearContentsButtonIcon,
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
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
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

  return (
    <NewDuelSearchContentsBox>
      <SearchContentsBox
        style={{
          borderRadius: contentsFound.length > 0 ? '5px 5px 0 0' : '',
        }}
      >
        <SearchContentsInput
          value={contentsName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setContentsName(event.target.value)
          }
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter')
              getContents(OnEducaAPI, setContentsFound, token, contentsName);
          }}
          type="text"
          placeholder="Pesquisar conteúdo (exemplo: Substantivos)"
        />
        <ClearContentsButton
          onClick={() => {
            setContentsFound([]);
            setContentsName('');
          }}
        >
          <ClearContentsButtonIcon className="fas fa-times" />
        </ClearContentsButton>
        <SearchContentsButton
          onClick={() =>
            getContents(OnEducaAPI, setContentsFound, token, contentsName)
          }
        >
          <SearchContentsButtonIcon className="fas fa-search" />
        </SearchContentsButton>
      </SearchContentsBox>
      {contentsFound.length > 0 && (
        <ContentsFound>
          <ContentsFoundList>
            {contentsFound.map((contentFound) => (
              <NewDuelContentFoundCard
                content={contentFound}
                unity={DEFAULT_UNITY}
                selectedContents={selectedContents}
                setSelectedContents={setSelectedContents}
              />
            ))}
          </ContentsFoundList>
        </ContentsFound>
      )}
    </NewDuelSearchContentsBox>
  );
};

export default NewDuelSearchContents;
