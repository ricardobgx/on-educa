/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import ContentsActions from '../../components/Contents/ContentsActions';
import ContentsList from '../../components/Contents/ContentsList';
import DeleteContent from '../../components/Contents/DeleteContent';
import { getContentsByUnity } from '../../functions/content';
import { IContent } from '../../interfaces/IContent';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CONTENT } from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, ContentsBox } from './styles';

interface IContentsRouteParams {
  id: string;
}

export interface ICommonContentProps {
  getContents: () => void;
}

const Contents = (): JSX.Element => {
  /* Global State */

  const { unity, subject, aplication } = useSelector((store: State) => store);
  const { userType, token } = aplication;

  /* Local State */

  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [contents, setContents] = useState<IContent[]>([]);

  const [deleteContentIsVisible, setDeleteContentIsVisible] = useState(false);

  /* Route params */

  const route = useRouteMatch();
  const { id: unityId } = route.params as IContentsRouteParams;

  /* Functions */

  const getContents = async (): Promise<void> => {
    await getContentsByUnity(OnEducaAPI, unityId, setContents, token);
  };

  useEffect(() => {
    getContents();
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
          {deleteContentIsVisible && (
            <DeleteContent
              content={content}
              getContents={getContents}
              setDeleteContentIsVisible={setDeleteContentIsVisible}
            />
          )}
          <ContentsList
            contents={contents}
            getContents={getContents}
            setContent={setContent}
            setDeleteContentIsVisible={setDeleteContentIsVisible}
          />
        </ContentsBox>
      </PageBox>
    </Page>
  );
};

export default Contents;
