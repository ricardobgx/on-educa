import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OverviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  padding-top: 5rem;
  min-height: 100vh;
`;

export const PlatformDescription = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.div``;

export const Title = styled.h1`
  color: var(--primary-color);
  font-size: 1.5rem;
  text-align: justify;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  color: var(--third-color);
  font-weight: bold;
  text-align: justify;
`;

export const Sign = styled.div``;

export const Slogan = styled.p`
  color: var(--primary-color);
  font-weight: bold;
`;

export const SignButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const SignButton = styled(Link)`
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: .25rem 1rem;
  border-radius: .25rem;
  min-width: 8rem;
  display: flex;
  justify-content: center;
`;

export const OverviewImage = styled.img`
  width: 50%;
`;