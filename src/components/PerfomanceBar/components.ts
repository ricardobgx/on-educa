import styled from 'styled-components';

export const PerformanceBarBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: var(--primary-color);
  padding: .5rem 1rem;
  margin: .75rem;
  border-radius: .5rem;
  color: var(--secondary-color);
  box-shadow: 0px 0px 8px var(--third-color);
  font-weight: bold;
  font-size: 1.05rem;

  @media (min-width: 1700px) {
    font-size: 1.2rem;
  }
`;

export const PersonalInfo = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    width: 50%;
  }
`;
export const UserName = styled.p`
`;
export const StudyStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SchoolGradeLabel = styled.p`
  margin-right:.75rem;
`;
export const StudyPoints = styled.p``;
export const Performance = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: max-content;
    align-items: flex-end;
  }
`;
export const ContentsStudied = styled.p``;
export const QuestionsSolved = styled.p``;
export const FullPerformanceButton = styled.button`
  width: 10rem;
  padding: .5rem;
  color: var(--secondary-color);
  background: none;
  border: 2px solid var(--secondary-color);
  border-radius: .5rem;
  font-size: 1.05rem;
  font-weight: bold;

  @media (min-width: 800px) and (max-width: 1100px) {
    margin-top: .5rem;
    width: 100%;
  }

  @media (max-width: 570px) {
    margin-top: .5rem;
    width: 100%;
  }

  @media (min-width: 1700px) {
    font-size: 1.2rem;
  }
`;

export const PerformanceSectionLabel = styled.p`
  border-bottom: 2px solid var(--secondary-color);
  padding: .25rem 0;
  margin-bottom: .25rem;
  text-align: center;
  /* background: var(--secondary-color); */
  /* color: var(--primary-color); */
  /* border-radius: .25rem; */
  width: 100%;
`;