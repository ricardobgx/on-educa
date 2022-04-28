/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

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
import { stringFieldValidation } from '../../functions/updateEntity';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CONTENT } from '../../static/defaultEntitiesValues';
import { RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
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
  const {
    aplication,
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
  } = useSelector((store: RootState) => store);

  const { token } = aplication;

  /* LocalRootState */

  // References

  const [teachingType, setTeachingType] =
    useState<ITeachingType>(globalTeachingType);
  const [schoolGrade, setSchoolGrade] =
    useState<ISchoolGrade>(globalSchoolGrade);
  const [subject, setSubject] = useState<ISubject>(globalSubject);
  const [unity, setUnity] = useState<IUnity>(globalUnity);
  const [content, setContent] = useState<IContent>(globalContent);

  // Content details

  const [name, setName] = useState(content.name);
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
      name: stringFieldValidation(name),
      description: stringFieldValidation(description),
      video: stringFieldValidation(video),
      unityId: unity.id,
    };

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
      setName(content.name);
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
              <NewContentName name={name} setName={setName} />
              <NewContentReferences
                teachingType={teachingType}
                setTeachingType={setTeachingType}
                schoolGrade={schoolGrade}
                setSchoolGrade={setSchoolGrade}
                subject={subject}
                setSubject={setSubject}
                unity={unity}
                setUnity={setUnity}
                content={content}
                setContent={setContent}
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
