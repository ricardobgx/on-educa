import React from 'react';
import { useSelector } from 'react-redux';
import { getContents } from '../../../functions/content';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
} from '../../App/Supplies/styles';
import NewDuelContentFoundCard from '../NewDuelContentFoundCard';
import {
  ContentsFound,
  NewDuelSearchContentsBox,
  ContentsFoundList,
  NewDuelSearchContentsContainer,
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

  return (
    <NewDuelSearchContentsBox>
      <SearchSuppliesBox
        className="bd-rd-20"
        style={{
          marginRight: 0,
          borderRadius: contentsFound.length > 0 ? '5px 5px 0 0' : '',
        }}
      >
        <SearchSuppliesInput
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
        <ClearSearchSuppliesInputButton
          onClick={() => {
            setContentsFound([]);
            setContentsName('');
          }}
        >
          <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
        </ClearSearchSuppliesInputButton>
        <SearchContentsButton
          onClick={() =>
            getContents(OnEducaAPI, setContentsFound, token, contentsName)
          }
        >
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
              />
            ))}
          </ContentsFoundList>
        </ContentsFound>
      )}
    </NewDuelSearchContentsBox>
  );
};

export default NewDuelSearchContents;
