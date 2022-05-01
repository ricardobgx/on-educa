interface IStudentWeeklyPerformance {
  id: string;
  xp: number;
  student: IStudent;
  weekDay: IStudentWeekDayPerformance;
  weekDays: IStudentWeekDayPerformance[];
  createdAt: string;
}
