import styled from 'styled-components';

export const SignSchoolGradeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .25rem 0;
  height: var(--button-input-height);
`;
export const SignSchoolGradeLabel = styled.p`
  color: var(--primary-color);
  font-size: 1.1rem;
`;
export const SignSchoolGradeSelect = styled.select`
  color: var(--secondary-color);
  background: var(--primary-color);
  border-radius: 5px;
  padding: 0 .25rem;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const SignSchoolGradeOption = styled.option`
`;

export const AddSubjectButton = styled.button`
width: 100%;
border-radius: 10px;
border: none;
padding: .8rem 1rem;
margin: .25rem 0;
color: var(--secondary-color);
background: var(--primary-color);
font-size: 1.1rem;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;

export const AddIcon = styled.i`

`;

export const SubjectsBoxBackground = styled.div`
  background: rgba(0, 0, 0, .5);
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
  width: 60%;
  padding: 3rem;
  background: var(--secondary-color);
  border-radius: 10px;
  position: relative;
  /* z-index: 95; */
  @media (max-width: 900px) {
    width: 80%;
  }
`;
export const CloseIcon = styled.i`
  color: var(--primary-color);
  position: absolute;
  top: 0%;
  left: 100%;
  transform: translateX(-100%);
  padding: 1rem;
`;
export const Subjects = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const SubjectsBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const SubjectsBoxLabel = styled.p`
  color: var(--primary-color);
  margin: .5rem 0;
  text-align: center;
`;
export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: .5rem 0;
  width: 100%;
  height: var(--button-input-height);
  color: var(--primary-color);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .25);
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
  background: #BBBBBB;
`;

export const SubjectActionButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
`;

export const AllSubjects = styled.div`
  width: 100%;
  height: 20rem;
  padding: .5rem 1rem;
  overflow: auto;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  @media (max-width: 900px) {
    height: 10rem;
  }
`;

export const CloseIconButton = styled.button`
  cursor: pointer;
`;