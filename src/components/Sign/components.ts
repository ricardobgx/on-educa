import styled from 'styled-components';

export const SignBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 3rem;
  }
`;

export const SignLabel = styled.h2`
  color: var(--primary-color);
  font-size: 1.7rem;
`;
export const SignFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;
export const SignField = styled.input`
  width: 100%;
  height: var(--button-input-height);
  padding: 1rem;
  color: #BBBBBB;
  border: 2px solid #BBBBBB;
  border-radius: 10px;
  margin: .25rem 0;
  font-size: 1.1rem;
  transition: all .4s linear;

  &:focus {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
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
  height: var(--button-input-height);
  margin: .25rem 0;
  color: var(--secondary-color);
  background: var(--primary-color);
  font-size: 1.1rem;
  cursor: pointer;
`;

export const ChangeSignUser = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: var(--button-input-height);
  margin: .25rem 0;
  color: var(--primary-color);
  background: var(--secondary-color);
  border: 2px solid var(--primary-color);
  font-size: 1.1rem;
  cursor: pointer;
`;