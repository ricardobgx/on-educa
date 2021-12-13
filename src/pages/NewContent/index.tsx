import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewContentAttachments from '../../components/NewContent/NewContentAttachments';
import NewContentDescription from '../../components/NewContent/NewContentDescription';
import NewContentName from '../../components/NewContent/NewContentName';
import NewContentReferences from '../../components/NewContent/NewContentReferences';
import NewContentVideo from '../../components/NewContent/NewContentVideo';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../components';
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

const NewContent = (): JSX.Element => {
  const { teachingType, schoolGrade, subject, unity, user } = useSelector(
    (store: State) => store,
  );

  /* Local State */

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');

  const [contentWasCreated, setContentWasCreated] = useState(false);

  /* Functions */

  const createContent = async (): Promise<void> => {
    await OnEducaAPI.post(
      '/contents',
      {
        title,
        description,
        video,
        unityId: unity.id,
        index: 1,
      },
      {
        headers: {
          Authorization: user.token,
        },
      },
    ).then(() => {
      setContentWasCreated(true);
    });
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo conteúdo" />
        <NewContentBox>
          <NewContentMainDetails>
            <NewContentVideo video={video} setVideo={setVideo} />
            <NewContentNameAndReference>
              <NewContentName title={title} setTitle={setTitle} />
              <NewContentReferences
                teachingType={teachingType}
                schoolGrade={schoolGrade}
                subject={subject}
                unity={unity}
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
