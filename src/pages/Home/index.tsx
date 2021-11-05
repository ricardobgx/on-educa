import React, { useState, useEffect } from 'react';
import {
  Page,
  PageBox,
  HomeActionsBox,
  HomeActions,
  SectionLabelBox,
  SectionLabelText,
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
  schoolGrade: number;
  subjects: ISubject[];
}

const actions: IHomeAction[] = [
  {
    icon: 'fas fa-book',
    label: 'Estudar',
    link: '/study',
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
    icon: 'fas fa-trophy',
    label: 'Ligas',
    link: '/leagues',
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

const DEFAULT_USER: IUser = {
  name: '',
  email: '',
  schoolGrade: 1,
  subjects: new Array<ISubject>(),
};

const Home = (): JSX.Element => {
  const [user, setUser] = useState(DEFAULT_USER);
  const [userType, setUserType] = useState('');
  const [dailyGoal, setDailyGoal] = useState(50);
  const [completedDailyGoal, setCompletedDailyGoal] = useState(10);
  const [editDailyGoal, setEditDailyGoal] = useState(false);

  const getStudent = async (email: string, token: string): Promise<void> => {
    await OnEducaAPI.get(`/students/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      const { name, schoolGrade }: IUser = response.data;
      const student = { email, name, schoolGrade } as IUser;

      setUser(student);
    });
  };

  const getTeacher = async (email: string, token: string): Promise<void> => {
    await OnEducaAPI.get(`/teachers/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      const { name, subjects }: IUser = response.data;
      const teacher = { email, name, subjects } as IUser;

      setUser(teacher);
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
    setUserType(window.localStorage.getItem('userType') || '');
    await getUser(token, email);
  };

  useEffect(() => {
    if (user === DEFAULT_USER) {
      loadUser();
    }
  });

  return (
    <Page>
      <NavBar />
      {editDailyGoal ? (
        <EditDailyGoal
          dailyGoal={dailyGoal}
          setDailyGoal={setDailyGoal}
          setEditDailyGoal={setEditDailyGoal}
        />
      ) : null}
      <PageBox>
        <HomeActionsBox>
          <SectionLabelBox>
            <SectionLabelText>Painel principal</SectionLabelText>
          </SectionLabelBox>
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
          <SectionLabelBox>
            <SectionLabelText>Desempenho</SectionLabelText>
          </SectionLabelBox>
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
