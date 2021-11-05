export interface IPerformanceBarProps {
  user: IUser;
  userType: string;
}

interface IUser {
  email: string;
  name: string;
  schoolGrade?: number;
  subjects: ISubject[];
}

interface ISubject {
  id: string;
  name: string;
}