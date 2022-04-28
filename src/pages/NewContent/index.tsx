/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewContentAttachments from '../../components/NewContent/NewContentAttachments';
import NewContentDescription from '../../components/NewContent/NewContentDescription';
import NewContentName from '../../components/NewContent/NewContentName';
import NewContentReferences from '../../components/NewContent/NewContentReferences';
import NewContentVideo from '../../components/NewContent/NewContentVideo';
import { IContentParams } from '../../dto/IContentParams';
import { createContent as createContentData } from '../../functions/content';
import OnEducaAPI from '../../services/api';
import { RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import {
  PageBox,
  NewContentBox,
  NewContentMainDetails,
  NewContentNameAndReference,
  NewContentAdditionalDetails,
  NewContentActions,
  CancelButton,
  CancelButtonLabel,
  CreateContentButton,
  CreateContentButtonLabel,
} from './styles';
import { updateTeacherWeeklyPerformanceValues } from '../../functions/teacherWeeklyPerformance';

const NewContent = (): JSX.Element => {
  const {
    aplication,
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
    teacher,
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

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');

  const [contentWasCreated, setContentWasCreated] = useState(false);

  /* Functions */

  const createContentSucess = (): void => {
    updateTeacherWeeklyPerformanceValues(
      OnEducaAPI,
      { teacherId: teacher.id, contentsCreatedNumber: 1, dailyXPNumber: 50 },
      token,
      () => {
        setContentWasCreated(true);
      },
      () => console.log('erro'),
    );
  };

  const createContentError = (): void => {
    console.log('erro');
  };

  const createContent = async (): Promise<void> => {
    const contentParams: IContentParams = {
      name,
      description,
      video,
      unityId: unity.id,
      index: 1,
    };

    await createContentData(
      OnEducaAPI,
      contentParams,
      token,
      createContentSucess,
      createContentError,
    );
  };

  console.log(schoolGrade.id);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo conteúdo" />
        <NewContentBox>
          <NewContentMainDetails>
            <NewContentVideo video={video} setVideo={setVideo} />
            <NewContentNameAndReference>
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
            </NewContentNameAndReference>
          </NewContentMainDetails>
          <NewContentAdditionalDetails>
            <NewContentDescription
              description={description}
              setDescription={setDescription}
            />
            <NewContentAttachments />
          </NewContentAdditionalDetails>
          <NewContentActions>
            <CancelButton to={`/units/${unity.id}`}>
              <CancelButtonLabel>Cancelar</CancelButtonLabel>
            </CancelButton>
            <CreateContentButton onClick={() => createContent()}>
              <CreateContentButtonLabel>
                Criar conteúdo
              </CreateContentButtonLabel>
            </CreateContentButton>
            {contentWasCreated && <Redirect to={`/units/${unity.id}`} />}
          </NewContentActions>
        </NewContentBox>
      </PageBox>
    </Page>
  );
};

export default NewContent;
