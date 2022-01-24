import styled from 'styled-components';

export const DuelsActionsBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const DuelsActionsButtonsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
