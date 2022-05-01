interface IHomeAction {
  icon: string;
  label: string;
  link: string;
  userType: string;
}

export const homeActions: IHomeAction[] = [
  {
    icon: 'book',
    label: 'Estudar',
    link: '/subjects',
    userType: 'student',
  },
  {
    icon: 'book',
    label: 'Ensinar',
    link: '/subjects',
    userType: 'teacher',
  },
  {
    icon: 'gamepad',
    label: 'Duelos',
    link: '/duels',
    userType: 'student',
  },
  {
    icon: 'description',
    label: 'Questões',
    link: '/questions',
    userType: 'teacher',
  },
  {
    icon: 'task_alt',
    label: 'Missões',
    link: '/missions',
    userType: 'both',
  },
  {
    icon: 'help_outline',
    label: 'Dúvidas',
    link: '/doubts',
    userType: 'both',
  },
  {
    icon: 'forum',
    label: 'Chat',
    link: '/chats',
    userType: 'both',
  },
  {
    icon: 'local_library',
    label: 'Sala Interativa',
    link: '/interative-rooms',
    userType: 'both',
  },
];
