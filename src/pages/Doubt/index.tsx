import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Page,
  PageBoxColumn,
  PageBoxRow,
} from '../../global/styles/components/pageComponents';
import { reduceTextSize } from '../../functions/utils';
import { TDoubtStatus } from '../../types/TDoubtStatus';
import {
  DoubtDescription,
  DoubtBox,
  DoubtHeader,
  DoubtOwner,
  OwnerInfo,
  OwnerName,
  OwnerPicture,
  OwnerSchoolGrade,
  DoubtStatus,
  DoubtStatusIcon,
  DoubtInfo,
  DoubtActionsButton,
  DoubtActionsContainer,
} from './styles';
import { RootState } from '../../store';
import { DEFAULT_DOUBT } from '../../static/defaultEntitiesValues';
import { getDoubt } from '../../functions/doubt';
import OnEducaAPI from '../../services/api';
import SectionLabel from '../../components/App/SectionLabel';
import DoubtComments from '../../components/Doubt/DoubtComments';
import NewDoubtComment from '../../components/Doubt/NewDoubtComment';
import { getDoubtCommentsByDoubt } from '../../functions/doubtComment';
import { MediumMaterialIconRound } from '../../components/App/Icons/MaterialIcons/MaterialIconsRound';
import DoubtActions from '../../components/Doubt/DoubtActions';
import { isDefaultStudent } from '../../functions/entitiesValues';

interface IDoubtRouteParams {
  id: string;
}

const Doubt = (): JSX.Element => {
  /* Route */
  const route = useRouteMatch();
  const { params } = route;
  const { id } = params as IDoubtRouteParams;

  /* GlobalRootState */
  const {
    aplication,
    people: loggedPeople,
    student: loggedStudent,
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  /* PageRootState */
  const [doubt, setDoubt] = useState<IDoubt>(DEFAULT_DOUBT);
  const [doubtComments, setDoubtComments] = useState<IDoubtComment[]>([]);
  const [doubtActionsIsActive, setDoubtActionsIsActive] = useState(false);

  /* Functions */
  const getDoubtAction = (): void => {
    getDoubt(OnEducaAPI, id, setDoubt, token);
  };

  const getDoubtCommentsAction = async (): Promise<void> => {
    const doubtCommentsData = await getDoubtCommentsByDoubt(
      OnEducaAPI,
      id,
      token,
    );

    setDoubtComments(doubtCommentsData);
  };

  useEffect(() => {
    if (token) {
      getDoubtAction();
      getDoubtCommentsAction();
    }
  }, [id, token]);

  const { description, status, student, content } = doubt;
  const { people, schoolGrade } = student;
  const { name, profilePicture } = people;
  const { name: contentName } = content;

  return (
    <Page>
      <PageBoxColumn>
        <SectionLabel
          label={`Dúvida sobre ${contentName}`}
          backLink={`/contents/${content.id}`}
        />
        <DoubtBox>
          <DoubtInfo>
            <DoubtHeader>
              <DoubtOwner>
                <OwnerPicture src={profilePicture.path} />
                <OwnerInfo>
                  <OwnerName>{name}</OwnerName>
                  <OwnerSchoolGrade>{schoolGrade.index}º ano</OwnerSchoolGrade>
                </OwnerInfo>
              </DoubtOwner>
              <DoubtStatus>
                {!isDefaultStudent(loggedStudent) &&
                  loggedStudent.id === student.id && (
                    <DoubtActionsContainer
                      onMouseLeave={() => {
                        setDoubtActionsIsActive(false);
                      }}
                    >
                      <DoubtActionsButton
                        onClick={() =>
                          setDoubtActionsIsActive(!doubtActionsIsActive)
                        }
                      >
                        <MediumMaterialIconRound color="" icon="more_vert" />
                      </DoubtActionsButton>
                      {doubtActionsIsActive && (
                        <DoubtActions
                          doubtId={id}
                          doubtStatus={doubt.status}
                          contentId={content.id}
                          token={token}
                          getDoubtAction={getDoubtAction}
                        />
                      )}
                    </DoubtActionsContainer>
                  )}
                <DoubtStatusIcon
                  className={`fas fa-${
                    status === TDoubtStatus.SOLVED ? 'check' : 'exclamation'
                  }-circle`}
                />
              </DoubtStatus>
            </DoubtHeader>
            <DoubtDescription>
              {reduceTextSize(description, 100, 50)}
            </DoubtDescription>
          </DoubtInfo>
          <DoubtComments doubtComments={doubtComments} />
          <NewDoubtComment
            loggedPeopleId={loggedPeople.id}
            doubtId={doubt.id}
            token={token}
            getDoubtCommentsAction={getDoubtCommentsAction}
          />
        </DoubtBox>
      </PageBoxColumn>
    </Page>
  );
};

export default Doubt;
