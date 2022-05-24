import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DoubtCardBox = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  margin-bottom: 20px;
  padding: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const DoubtCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const DoubtCardOwner = styled.div`
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
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
  height: 25px;
`;
export const OwnerSchoolGrade = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  height: 25px;
  display: flex;
  align-items: flex-end;
`;
export const DoubtCardInfo = styled.div``;
export const DoubtCardDescription = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  /* font-weight: bold; */
  text-align: justify;
`;
export const DoubtCardStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
export const DoubtCardComments = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const DoubtCardCommentsNumber = styled(paragraph)`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const DoubtCardCommentsIcon = styled.i`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const DoubtCardStatusIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-size: 20px;
  margin-left: 10px;
`;
