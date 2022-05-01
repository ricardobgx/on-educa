import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const SelectSubjectsDetails = styled.div`
  display: flex;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const SubjectsActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 0;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const CancelButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  width: calc(50% - 20px);

  transition: all 0.2s linear;

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CancelButtonLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
export const SelectUnityButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(50% - 20px);
  min-height: 40px;

  border: none;

  cursor: pointer;

  transition: all 0.2s linear;

  &.disabled {
    opacity: 0.7;
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.mainButtonShadowColor} !important;

    pointer-events: none;

    p {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const SelectUnityButtonLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
