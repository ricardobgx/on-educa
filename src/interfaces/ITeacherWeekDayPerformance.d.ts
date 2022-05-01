interface ITeacherWeekDayPerformance extends IPeopleWeekDayPerformance {
  contentsCreated: number;
  questionsCreated: number;
  doubtsSolved: number;
  interativeRoomsCreated: number;
  weekPerformance?: ITeacherWeeklyPerformance;
}
