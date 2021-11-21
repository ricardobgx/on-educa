import styled from 'styled-components';

export const SignSchoolGradeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.25rem 0;
  height: 50px;
`;
export const SignSchoolGradeLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
`;
export const SignSchoolGradeSelect = styled.select`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  padding: 0 0.25rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s linear;

  &:focus {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const SignSchoolGradeOption = styled.option`
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.boxColor};
  }
`;

export const AddSubjectButton = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 0.8rem 1rem;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const AddIcon = styled.i``;

export const SubjectsBoxBackground = styled.div`
  background: ${({ theme }) => theme.colors.boxShadowColor};
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllSubjectsBox = styled.div`
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  position: relative;
  margin: 40px;
  padding: 20px;
  /* z-index: 95; */
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Subjects = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const SubjectsBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const SubjectsBoxLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0.5rem 0;
  text-align: center;
`;
export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0.5rem 0;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
`;
export const SubjectLabel = styled.p``;
export const RemoveSubjectIcon = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const AddSubjectIcon = styled.i``;

export const SubjectsDivision = styled.div`
  height: 1px;
  width: 100%;
  background: #bbbbbb;
`;

export const SubjectActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

export const AllSubjects = styled.div`
  width: 100%;
  height: 20rem;
  padding: 0.5rem 1rem;
  overflow: auto;
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  @media (max-width: 900px) {
    height: 30vh;
  }
`;

export const CloseIconButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  position: absolute;
  top: 0%;
  left: 100%;
  transform: translateX(-100%);
  padding: 1rem;
  background: none;
  border: none;
`;
export const CloseIcon = styled.i``;
