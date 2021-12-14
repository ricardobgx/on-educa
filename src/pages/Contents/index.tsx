/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import ContentsActions from '../../components/Contents/ContentsActions';
import ContentsList from '../../components/Contents/ContentsList';
import { IContent } from '../../interfaces/IContent';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../components';
import { PageBox, ContentsBox } from './styles';

const Contents = (): JSX.Element => {
  const [contents, setContents] = useState<IContent[]>([]);

  const { unity, subject, aplication } = useSelector((store: State) => store);
  const { userType } = aplication;

  const getContents = async (
    setContentsState: (value: IContent[]) => void,
  ): Promise<void> => {
    await OnEducaAPI.get(`/contents/unity/${unity.id}`).then(
      (contentsResponse) => {
        setContentsState(contentsResponse.data);
      },
    );
  };

  useEffect(() => {
    getContents(setContents);
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel
          backLink={`/subjects/${subject.id}`}
          label={`${unity.title} - conteúdos`}
        />
        <ContentsBox>
          <ContentsActions userType={userType} unity={unity} />
          <ContentsList contents={contents} />
        </ContentsBox>
      </PageBox>
    </Page>
  );
};

export default Contents;
