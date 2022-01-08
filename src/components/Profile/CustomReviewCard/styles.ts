import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserName = styled(paragraph)`
  font-weight: bold;
`;
export const UserSchoolGrade = styled(paragraph)``;
export const CustomReviewName = styled(paragraph)`
  font-weight: bold;
`;
