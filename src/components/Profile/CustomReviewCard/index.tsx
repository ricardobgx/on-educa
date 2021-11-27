import React from 'react';
import {
  Container,
  UserInfo,
  UserPicture,
  UserInfoBox,
  UserName,
  UserSchoolGrade,
  CustomReviewName,
} from './styles';

interface ICustomReviewCardProps {
  id: string;
  name: string;
  userName: string;
  userProfilePicture: string;
  userSchoolGrade: number;
}

const CustomReviewCard = (props: ICustomReviewCardProps): JSX.Element => {
  const { id, name, userName, userProfilePicture, userSchoolGrade } = props;

  return (
    <Container to={`/custom-reviews/${id}`}>
      <UserInfo>
        <UserPicture src={userProfilePicture} />
        <UserInfoBox>
          <UserName>{userName}</UserName>
          <UserSchoolGrade>{userSchoolGrade}</UserSchoolGrade>
        </UserInfoBox>
      </UserInfo>
      <CustomReviewName>{name}</CustomReviewName>
    </Container>
  );
};

export default CustomReviewCard;
