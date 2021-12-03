/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  PageBox,
  HomeActionsBox,
  HomeActions,
  PerformanceBox,
  AchievementsBox,
  AchievementsLabel,
  DailyGoalBox,
  DailyGoalLabel,
  DailyGoalDataBox,
  DailyGoalEditIcon,
  DailyGoalIcon,
  AchievementsIcon,
  DailyGoalEditButton,
} from './components';

import HomeAction from '../../components/Home/HomeAction';
import NavBar from '../../components/App/NavBar';
import OnEducaAPI from '../../services/api';
import DailyPerformance from '../../components/Home/DailyPerformance';
import EditDailyGoal from '../../components/Home/EditDailyGoal';
import { ActionCreators, State } from '../../store';
import { DEFAULT_USER } from '../../store/reducers/user';
import { Page } from '../components';
import SectionLabel from '../../components/App/SectionLabel';

interface IHomeAction {
  icon: string;
  label: string;
  link: string;
  userType: string;
}

interface ISubject {
  id: string;
  name: string;
}

interface IUser {
  email: string;
  name: string;
  profilePicture: string;
  schoolGrade: number;
  subjects: ISubject[];
}

const actions: IHomeAction[] = [
  {
    icon: 'fas fa-book',
    label: 'Estudar',
    link: '/subjects',
    userType: 'student',
  },
  {
    icon: 'fas fa-book',
    label: 'Ensinar',
    link: '/teach',
    userType: 'teacher',
  },
  {
    icon: 'fas fa-gamepad',
    label: 'Duelos',
    link: '/duels',
    userType: 'student',
  },
  {
    icon: 'fas fa-file-alt',
    label: 'Questões',
    link: '/questions',
    userType: 'teacher',
  },
  {
    icon: 'fas fa-user-secret',
    label: 'Missões',
    link: '/missions',
    userType: 'both',
  },
  {
    icon: 'fas fa-question',
    label: 'Dúvidas',
    link: '/doubts',
    userType: 'both',
  },
  {
    icon: 'fas fa-comment-alt',
    label: 'Chat',
    link: '/chats',
    userType: 'both',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    label: 'Sala Interativa',
    link: '/interative-rooms',
    userType: 'both',
  },
];

const Home = (): JSX.Element => {
  const [userType, setUserType] = useState('');
  const [dailyGoal, setDailyGoal] = useState(50);
  const [completedDailyGoal, setCompletedDailyGoal] = useState(10);
  const [editDailyGoal, setEditDailyGoal] = useState(false);

  const dispatch = useDispatch();

  const { loginUser } = bindActionCreators(ActionCreators, dispatch);
  const user = useSelector((store: State) => store.user);

  const getStudent = async (email: string, token: string): Promise<void> => {
    await OnEducaAPI.get(`/students/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      const { name, profilePicture, schoolGrade }: IUser = response.data;
      const student = { email, name, profilePicture, schoolGrade } as IUser;

      loginUser({ ...student, token });
    });
  };

  const getTeacher = async (email: string, token: string): Promise<void> => {
    await OnEducaAPI.get(`/teachers/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      const { name, profilePicture, subjects }: IUser = response.data;
      const teacher = { email, name, profilePicture, subjects } as IUser;

      loginUser({ ...teacher, token });
    });
  };

  const getUser = async (token: string, email: string): Promise<void> => {
    if (userType === 'student') {
      await getStudent(email, token);
    } else if (userType === 'teacher') {
      await getTeacher(email, token);
    }
  };

  const loadUser = async (): Promise<void> => {
    const email = window.localStorage.getItem('email') || '';
    const token = window.localStorage.getItem('token') || '';
    await getUser(token, email);
  };

  useEffect(() => {
    if (userType === '')
      setUserType(window.localStorage.getItem('userType') || '');
    if (user === DEFAULT_USER) loadUser();
  }, []);

  return (
    <Page>
      {editDailyGoal ? (
        <EditDailyGoal
          dailyGoal={dailyGoal}
          setDailyGoal={setDailyGoal}
          setEditDailyGoal={setEditDailyGoal}
        />
      ) : null}
      <PageBox>
        <HomeActionsBox>
          <SectionLabel backLink="" label="Painel principal" />
          <HomeActions>
            {actions.map((action) =>
              action.userType === 'both' || action.userType === userType ? (
                <HomeAction
                  key={action.label}
                  icon={action.icon}
                  label={action.label}
                  link={action.link}
                />
              ) : null,
            )}
          </HomeActions>
        </HomeActionsBox>
        <PerformanceBox>
          <SectionLabel backLink="" label="Desempenho" />
          <DailyPerformance />
          <AchievementsBox to="/achievements">
            <AchievementsIcon className="fas fa-star" />
            <AchievementsLabel>Conquistas</AchievementsLabel>
          </AchievementsBox>
          <DailyGoalBox>
            <DailyGoalDataBox>
              <DailyGoalIcon className="fas fa-bullseye" />
              <DailyGoalLabel>Meta diária</DailyGoalLabel>
            </DailyGoalDataBox>
            <DailyGoalDataBox>
              <DailyGoalLabel>
                {completedDailyGoal}/{dailyGoal} XP
              </DailyGoalLabel>
              <DailyGoalEditButton onClick={() => setEditDailyGoal(true)}>
                <DailyGoalEditIcon className="fas fa-pen" />
              </DailyGoalEditButton>
            </DailyGoalDataBox>
          </DailyGoalBox>
        </PerformanceBox>
      </PageBox>
    </Page>
  );
};

export default Home;
