/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import CustomReviewCard from '../CustomReviewCard';
import {
  Container,
  CustomReviewsLabel,
  CustomReviewsList,
  CustomReviewsListBox,
} from './styles';

const customReviews = [
  {
    id: '1',
    userName: 'Aluno Fulano Sicrano da Silva',
    userProfilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    userSchoolGrade: 2,
    name: 'Revisão da prova de matemática',
  },
  {
    id: '1',
    userName: 'Aluno Fulano Sicrano da Silva',
    userProfilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    userSchoolGrade: 2,
    name: 'Revisão da prova de matemática',
  },
  {
    id: '1',
    userName: 'Aluno Fulano Sicrano da Silva',
    userProfilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    userSchoolGrade: 2,
    name: 'Revisão da prova de matemática',
  },
  {
    id: '1',
    userName: 'Aluno Fulano Sicrano da Silva',
    userProfilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    userSchoolGrade: 2,
    name: 'Revisão da prova de matemática',
  },
  {
    id: '1',
    userName: 'Aluno Fulano Sicrano da Silva',
    userProfilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    userSchoolGrade: 2,
    name: 'Revisão da prova de matemática',
  },
];

const CustomReviews = (): JSX.Element => {
  return (
    <Container>
      <CustomReviewsLabel>Revisões personalizadas</CustomReviewsLabel>
      <CustomReviewsList>
        <CustomReviewsListBox>
          {customReviews.map((customReview) => (
            <CustomReviewCard {...customReview} />
          ))}
        </CustomReviewsListBox>
      </CustomReviewsList>
    </Container>
  );
};

export default CustomReviews;
