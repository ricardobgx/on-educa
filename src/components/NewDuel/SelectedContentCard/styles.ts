import styled from 'styled-components';
import { paragraph } from '../../../components';

export const SelectedContentCardBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;

  @media (max-width: 700px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;
export const ContentInfoIcon = styled.i`
  margin-right: 10px;
`;
export const ContentBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
export const ContentName = styled(paragraph)``;
export const ContentIcon = styled(ContentInfoIcon)``;
export const AdditionalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SubjectBox = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const SubjectName = styled(paragraph)``;
export const SubjectIcon = styled(ContentInfoIcon)``;
export const UnitBox = styled.div`
  display: flex;
`;
export const UnitName = styled(paragraph)``;
export const UnitIcon = styled(ContentInfoIcon)``;
export const DeleteContentButton = styled.button`
  background: ${({ theme }) => theme.similarColors.warningColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  min-width: 40px;
  min-height: 30px;
  border: none;
  color: ${({ theme }) => theme.colors.whiteColor};
`;
export const DeleteContentButtonIcon = styled.i`
  font-size: 1rem;
`;
