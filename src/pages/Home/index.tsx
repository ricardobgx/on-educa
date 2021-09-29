import React from 'react';
import {
  Page,
  PageBox,
  HomeActionsBox,
  HomeActions
} from './components';

import study from '../../assets/icons/study.png';
import league from '../../assets/icons/league.png';
import duel from '../../assets/icons/duel.png';
import doubt from '../../assets/icons/doubt.png';
import question from '../../assets/icons/question.png';
import chat from '../../assets/icons/chat.png';
import interativeRoom from '../../assets/icons/interativeRoom.png';
import HomeAction from '../../components/HomeAction';
import PerformanceBar from '../../components/PerfomanceBar';
import NavBar from '../../components/NavBar';
import NewsBoard from '../../components/NewsBoard';
import OnEducaAPI from '../../services/api';

interface IHomeAction {
  icon: string;
  label: string;
  link: string;
  userType: string;
}

interface IState {
  user: IUser;
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
    icon: study,
    label: 'Estudar',
    link: '/contents',
    userType: 'student'
  },
  {
    icon: study,
    label: 'Ensinar',
    link: '/contents',
    userType: 'teacher'
  },
  {
    icon: duel,
    label: 'Duelos',
    link: '/duels',
    userType: 'student'
  },
  {
    icon: question,
    label: 'Questões',
    link: '/questions',
    userType: 'teacher'
  },
  {
    icon: league,
    label: 'Ligas',
    link: '/leagues',
    userType: 'both'
  },
  {
    icon: doubt,
    label: 'Dúvidas',
    link: '/doubts',
    userType: 'both'
  },
  {
    icon: chat,
    label: 'Chat',
    link: '/chats',
    userType: 'both'
  },
  {
    icon: interativeRoom,
    label: 'Sala Interativa',
    link: '/interative-rooms',
    userType: 'both'
  },
]

export default class Home extends React.Component {
  state: IState = {
    user: {
      email: '',
      name: '',
      schoolGrade: -1,
      subjects: []
    },
    userType: ''
  }

  async componentDidMount() {
    const email = window.localStorage.getItem('email') || '';
    const token = window.localStorage.getItem('token') || '';
    const userType = window.localStorage.getItem('userType') || '';

    this.setState({ userType });

    await this.getUser(token, email, userType);
  }

  getUser = async (token: string, email: string, userType: string) => {
    if (userType === 'student') {
      await this.getStudent(email, token);
    } else if (userType === 'teacher') {
      await this.getTeacher(email, token);
    }
  }

  getStudent = async (email: string, token: string) => {
    await OnEducaAPI.get('/students/' + email, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {

      const { name, schoolGrade }: IUser = response.data;
      const user = { email, name, schoolGrade } as IUser;

      this.setState({ user });
    })
  }

  getTeacher = async (email: string, token: string) => {
    await OnEducaAPI.get('/teachers/' + email, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {

      const { name, subjects }: IUser = response.data;
      const user = { email, name, subjects } as IUser;

      this.setState({ user });
    })
  }

  logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('email');
    window.location.reload();
  }

  render() {

    const { user, userType } = this.state;

    return (
      <Page>
        <NavBar name={user.name} />
        <PageBox>
          <HomeActionsBox>
            <PerformanceBar user={user} userType={userType}>
            </PerformanceBar>
            <HomeActions>
              {actions.map(action => (
                (action.userType === 'both' || action.userType === userType ? <HomeAction key={action.label} icon={action.icon} label={action.label} link={action.link} /> : null)
              ))}
            </HomeActions>
          </HomeActionsBox>
          <NewsBoard />
        </PageBox>
      </Page>
    );
  }
}