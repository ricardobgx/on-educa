import styled from 'styled-components';

export const SelectTeachingTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
  padding-top: 12vh;
`;
export const TeachingTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
`;
export const TeachingType = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min-content;

  background: none;
  border: none;

  cursor: pointer;

  opacity: 0.7;

  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }

  & svg {
    height: 260px;
    margin-bottom: 20px;
  }

  :nth-child(1) svg {
    width: 360px;
  }

  :nth-child(2) svg {
    width: 352px;
  }

  @media (max-width: 1050px) {
    margin-top: 15vh;

    & svg {
      height: 220px;
      margin-bottom: 20px;
    }

    :nth-child(1) svg {
      width: 300px;
    }

    :nth-child(2) svg {
      width: 300px;
    }
  }
`;
export const TeachingTypeImage = styled.img``;
export const TeachingTypeLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColor};

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
