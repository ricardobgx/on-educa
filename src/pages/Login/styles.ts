import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sign = styled.div`
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px var(--third-color);
  width: 20rem;
  border-radius: .5rem;
`;
export const SignLabel = styled.h1`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: .25rem 0;
`;
export const TextField = styled.input`
  width: 100%;
  padding: .5rem;
  margin: .25rem 0;
  border-radius: .25rem;
  border: 1px solid var(--primary-color);
`;
export const ForgotBox = styled.div`
  width: 100%;
  margin: .25rem 0;
`;
export const ForgotPasswordLabel = styled.a`
  font-size: .8rem;
`;
export const SignButton = styled(Link)`
  color: var(--secondary-color);
  padding: .25rem 1.5rem;
  background: var(--primary-color);
  border-radius: .25rem;
  margin: .25rem;
`;