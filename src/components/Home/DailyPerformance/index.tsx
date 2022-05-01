import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import StudentDailyPerformance from './StudentDailyPerformance';
import TeacherDailyPerformance from './TeacherDailyPerformance';

const DailyPerformance: React.FC = (): JSX.Element => {
  const { people } = useSelector((store: RootState) => store);

  return (
    <>
      {people.isStudent ? (
        <StudentDailyPerformance />
      ) : (
        <TeacherDailyPerformance />
      )}
    </>
  );
};

export default DailyPerformance;
