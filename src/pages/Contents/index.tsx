/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import ContentsActions from '../../components/Contents/ContentsActions';
import ContentsList from '../../components/Contents/ContentsList';
import DeleteContent from '../../components/Contents/DeleteContent';
import { getContentsByUnity } from '../../functions/content';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CONTENT } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, ContentsBox } from './styles';
import { SuppliesBox } from '../../components/App/Supplies/styles';

interface IContentsRouteParams {
  id: string;
}

export interface ICommonContentProps {
  getContents: () => void;
}

const Contents = (): JSX.Element => {
  /* GlobalRootState */

  const { unity, subject, aplication } = useSelector(
    (store: RootState) => store,
  );
  const { isStudent, token } = aplication;

  const dispatch = useDispatch();
  const { loadPopup, loadContent } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* LocalRootState */

  const [contents, setContents] = useState<IContent[]>([]);

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
          label={`${unity.name} - conteúdos`}
        />
        <SuppliesBox>
          <ContentsBox>
            <ContentsActions isStudent={isStudent} unity={unity} />
            <ContentsList
              contents={contents}
              getContents={getContents}
              loadContent={loadContent}
              loadPopup={loadPopup}
            />
          </ContentsBox>
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Contents;
