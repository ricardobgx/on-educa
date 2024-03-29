interface IStudentWeekDayPerformance extends IPeopleWeekDayPerformance {
  contentsStudied: number;
  questionsAnswered: number;
  questionsAnsweredCorrectly: number;
  duelsParticipated: number;
  duelsWon: number;
  weekPerformance?: IStudentWeeklyPerformance;
}
