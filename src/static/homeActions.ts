interface IHomeAction {
  icon: string;
  label: string;
  link: string;
  userType: string;
}

export const homeActions: IHomeAction[] = [
  {
    icon: 'fas fa-book',
    label: 'Estudar',
    link: '/learn',
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
