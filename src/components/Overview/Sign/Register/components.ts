import styled from 'styled-components';
import { mediumIcon } from '../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const AddSubjectButton = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  min-height: 50px;
  padding: 0 20px;
  margin: 10px 0;
  background: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const AddSubjectButtonLabel = styled(paragraph)``;
export const AddIcon = styled(mediumIcon)``;

export const SubjectsBoxBackground = styled.div`
  background: ${({ theme }) => theme.colors.boxShadowColor};
  width: 100%;
  height: 100vh;
  padding: 40px;
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
  padding: 40px;
  /* z-index: 95; */
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Subjects = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const SubjectsBox = styled.div`
  height: 100%;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }

  &:last-of-type {
    margin: 0;
  }
`;
export const SubjectsBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 10px;
  text-align: center;
`;
export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  &:last-of-type {
    margin: 0;
  }
`;
export const SubjectLabel = styled(paragraph)``;
export const RemoveSubjectIcon = styled(paragraph)`
  font-weight: bold;
`;
export const AddSubjectIcon = styled(mediumIcon)``;

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
  height: 50vh;
  padding: 20px;
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
  padding: 20px;
  background: none;
  border: none;
`;
export const CloseIcon = styled(mediumIcon)``;
