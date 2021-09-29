import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewsBoardBox = styled.div`
  width: 48%;
  background: var(--secondary-color);
  box-shadow: 0px 0px 8px var(--third-color);
  border-radius: .5rem;
  padding: 1.5rem;
  margin: 1.5rem .75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const News = styled.div``;
export const NewsBoardActions = styled.div`
  color: var(--secondary-color);
  display: flex;
  align-items: center;
`;
export const FullNewsBoard = styled.button`
  background: var(--primary-color);
  border: none;
  padding: .5rem 1rem;
  border-radius: .5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary-color);
  height: 2.25rem;
  margin: 0 .25rem;
`;
export const NewPublication = styled.button`
  background: var(--primary-color);
  border: none;
  border-radius: .5rem;
  font-size: .8rem;
  font-weight: bold;
  color: var(--secondary-color);
  height: 2.25rem;
  margin: 0 .25rem;
`;

export const NewPublicationIcon = styled.i`
  width: 2.25rem;
`;

export const NewsBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
`;
export const NewsInfo = styled.div`
  margin-right: 1rem;
`;
export const NewsTitle = styled.p`
  font-weight: bold;
  margin-bottom: .5rem;
`;
export const NewsDescription = styled.p`
  color: var(--third-color);
`;
export const NewsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--secondary-color);
`;
export const NewsIcon = styled.i`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewsDivision = styled.div`
  height: 1px;
  width: 100%;
  background: var(--third-color);
`;

export const HomeNews = styled.div``;