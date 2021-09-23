import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;
export const PlatformInformation = styled.div`
  color: var(--secondary-color);
  background: var(--primary-color);
  width: 67%;
  padding: 5rem;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    padding: 5rem 3rem;
  }
`;

export const PlatformInformationBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Information = styled.div`
  
`;
export const Title = styled.h1`
  font-size: 2.5rem;
`;
export const Slogan = styled.h2`
  font-size: 2.2rem;
`;
export const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  text-align: justify;
`;
export const Functions = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Function = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
`;
export const Icon = styled.img`
  width: 4.5rem;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    width: 3rem;
  }
`;
export const Name = styled.p`
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
export const Sign = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ScrollIcon = styled.i`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  animation: scroll 1s linear infinite;
  display: none;

  @keyframes scroll {
    0% {
      bottom: 1rem;
    }
    50% {
      bottom: 2rem;
    }
    100% {
      bottom: 1rem;
    }
  }

  @media (max-width: 900px) {
    display: unset;
  }
`;

export const SignTypeLabel = styled.p`
  color: var(--primary-color);
  font-size: 1rem;
`;
export const SignTypeButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary-color);
  margin: .25rem 0;
  cursor: pointer;
`;