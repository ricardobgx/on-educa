interface IMission {
  id: string;
  description: string;
  goal: number;
  activities: IMissionActivity;
  isStudentMission: boolean;
  reward: number;
}
