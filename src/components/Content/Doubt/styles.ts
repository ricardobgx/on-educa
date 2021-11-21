import styled from 'styled-components';
import { paragraph } from '../../../components';

export const DoubtBox = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const DoubtHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const DoubtOwner = styled.div`
  display: flex;
`;
export const OwnerPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OwnerName = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  height: 25px;
`;
export const OwnerSchoolGrade = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  height: 25px;
  display: flex;
  align-items: flex-end;
`;
export const DoubtInfo = styled.div``;
export const DoubtDescription = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  /* font-weight: bold; */
  text-align: justify;
`;
export const DoubtStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
export const DoubtComments = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const DoubtCommentsNumber = styled(paragraph)`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const DoubtCommentsIcon = styled.i`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DoubtStatusIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 20px;
  margin-left: 10px;
`;
