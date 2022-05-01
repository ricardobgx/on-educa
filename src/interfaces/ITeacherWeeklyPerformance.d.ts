interface ITeacherWeeklyPerformance {
  id: string;
  xp: number;
  teacher: ITeacher;
  weekDay: ITeacherWeekDayPerformance;
  weekDays: ITeacherWeekDayPerformance[];
}
