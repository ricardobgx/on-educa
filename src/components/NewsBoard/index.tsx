import React from 'react';
import {
  NewsBoardBox,
  News,
  NewsBoardActions,
  FullNewsBoard,
  NewPublication,
  NewPublicationIcon,
  NewsBox,
  NewsInfo,
  NewsTitle,
  NewsDescription,
  NewsLink,
  NewsIcon,
  NewsDivision,
  HomeNews
} from './components';
import { INewsBoardProps } from './interfaces';

const news = [
  {
    id: 'ccccdcsc45164',
    title: 'Notícia 1',
    description: 'Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum',
  }
]

const NewsBoard: React.FunctionComponent<INewsBoardProps> = props => {
  return (
    <NewsBoardBox>
      <News>
        {news.map((publication, index) => {
          return (
            <HomeNews key={index}>
              <NewsBox>
                <NewsInfo>
                  <NewsTitle>{publication.title}</NewsTitle>
                  <NewsDescription>{publication.description}</NewsDescription>
                </NewsInfo>
                <NewsLink to={'/news/' + publication.id}>
                  <NewsIcon className={'fas fa-arrow-right'}></NewsIcon>
                </NewsLink>
              </NewsBox>
              {(index !== news.length - 1 ? <NewsDivision></NewsDivision> : null)}
            </HomeNews>
          );
        })}
      </News>
      <NewsBoardActions>
        <FullNewsBoard>Ver mural completo</FullNewsBoard>
        <NewPublication><NewPublicationIcon className={'fas fa-plus'}></NewPublicationIcon></NewPublication>
      </NewsBoardActions>
    </NewsBoardBox>
  );
}

export default NewsBoard;