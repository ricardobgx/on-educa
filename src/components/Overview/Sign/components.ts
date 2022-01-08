import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const SignBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 40px;
  }
`;

export const SignLabel = styled.h2`
  color: ${({ theme }) => theme.colors.textColor};
  /* font-size: 1.7rem; */
  font-size: 3vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 5vw;
  }

  @media (max-width: 600px) {
    font-size: 6.5vw;
  }
`;
export const SignFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export const SignActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const SignButton = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 50px;
  margin: 0.25rem 0;
  background: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  cursor: pointer;
`;

export const SignButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
`;

export const ChangeSignUser = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 50px;
  margin: 0.25rem 0;
  background: ${({ theme }) => theme.colors.boxColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const ChangeSignUserLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
