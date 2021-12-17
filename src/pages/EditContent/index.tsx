import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewContentAttachments from '../../components/NewContent/NewContentAttachments';
import NewContentDescription from '../../components/NewContent/NewContentDescription';
import NewContentName from '../../components/NewContent/NewContentName';
import NewContentReferences from '../../components/NewContent/NewContentReferences';
import NewContentVideo from '../../components/NewContent/NewContentVideo';
import { IContentParams } from '../../dto/IContentParams';
import {
  getContent,
  updateContent as updateContentData,
} from '../../functions/content';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CONTENT } from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../components';
import {
  PageBox,
  EditContentBox,
  EditContentMainDetails,
  EditContentNameAndReference,
  EditContentAdditionalDetails,
  EditContentActions,
  CancelButton,
  CancelButtonLabel,
  UpdateContentButton,
  UpdateContentButtonLabel,
} from './styles';

interface IEditContentRouteParams {
  id: string;
}

const EditContent = (): JSX.Element => {
  const { unity, aplication, teachingType, schoolGrade, subject } = useSelector(
    (store: State) => store,
  );

  const { token } = aplication;

  /* Local State */

  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [title, setTitle] = useState(content.title);
  const [description, setDescription] = useState(content.description);
  const [video, setVideo] = useState(content.video);

  const [contentWasUpdated, setContentWasUpdated] = useState(false);

  /* Route params */

  const route = useRouteMatch();
  const { id } = route.params as IEditContentRouteParams;

  /* Functions */

  const updateSucess = (): void => {
    setContentWasUpdated(true);
  };

  const updateError = (): void => {
    console.log('Erro');
  };

  const updateContent = async (): Promise<void> => {
    const contentParams: IContentParams = {
      title: title === '' ? undefined : title,
      description,
      video,
    };

    console.log(contentParams);

    updateContentData(
      OnEducaAPI,
      id,
      contentParams,
      token,
      updateSucess,
      updateError,
    );
  };

  useEffect(() => {
    if (content === DEFAULT_CONTENT)
      getContent(OnEducaAPI, id, token, setContent);
    else {
      setTitle(content.title);
      setDescription(content.description);
      setVideo(content.video);
    }
  }, [content]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo conteúdo" />
        <EditContentBox>
          <EditContentMainDetails>
            <NewContentVideo video={video} setVideo={setVideo} />
            <EditContentNameAndReference>
              <NewContentName title={title} setTitle={setTitle} />
              <NewContentReferences
                teachingType={teachingType}
                schoolGrade={schoolGrade}
                subject={subject}
                unity={unity}
              />
            </EditContentNameAndReference>
          </EditContentMainDetails>
          <EditContentAdditionalDetails>
            <NewContentDescription
              description={description}
              setDescription={setDescription}
            />
            <NewContentAttachments />
          </EditContentAdditionalDetails>
          <EditContentActions>
            <CancelButton to={`/units/${unity.id}`}>
              <CancelButtonLabel>Cancelar</CancelButtonLabel>
            </CancelButton>
            <UpdateContentButton onClick={() => updateContent()}>
              <UpdateContentButtonLabel>
                Atualizar conteúdo
              </UpdateContentButtonLabel>
            </UpdateContentButton>
            {contentWasUpdated && <Redirect to={`/units/${unity.id}`} />}
          </EditContentActions>
        </EditContentBox>
      </PageBox>
    </Page>
  );
};

export default EditContent;
