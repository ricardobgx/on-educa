import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeActionBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 11rem;
  height: 11rem;
  box-shadow: 0px 0px 8px var(--third-color);
  margin: .75rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all .2s linear;

  @media (max-width: 400px) {
    width: 7.25rem;
    height: 7.25rem;
    padding: .75rem;
  }

  @media (max-width: 425px) and (min-width: 401px) {
    width: 10rem;
    height: 10rem;
    padding: .75rem;
  }

  @media (min-width: 1700px) {
    width: 13rem;
    height: 13rem;
    padding: .75rem;
  }

  &:hover {
    border-color: var(--primary-color);
  }
`;

export const HomeActionIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;

  @media (max-width: 400px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 425px) and (min-width: 401px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (min-width: 1700px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const HomeActionLabel = styled.p`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.05rem;
  text-align: center;

  @media (min-width: 1700px) {
    font-size: 1.2rem;
  }
`;