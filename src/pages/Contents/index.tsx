import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import ContentsActions from '../../components/Contents/ContentsActions';
import ContentsList from '../../components/Contents/ContentsList';
import { IContent } from '../../interfaces/IContent';
import { Page } from '../components';
import { PageBox, ContentsBox } from './styles';

const contents: IContent[] = [
  {
    id: '1',
    title: 'Substantivo próprio',
  },
  {
    id: '2',
    title: 'Substantivo comum',
  },
  {
    id: '3',
    title: 'Substantivo composto',
  },
  {
    id: '4',
    title: 'Substantivo abstrato',
  },
];

const Contents = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/subjects" label="Substantivos - conteúdos" />
        <ContentsBox>
          <ContentsActions />
          <ContentsList contents={contents} />
        </ContentsBox>
      </PageBox>
    </Page>
  );
};

export default Contents;
