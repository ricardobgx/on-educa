import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bigIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';
import { ExtraBigMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';

export const HomeActionBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: calc((100vh - 265px) / 2);
  height: calc((100vh - 265px) / 2);
  margin: 20px;
  padding: calc(((100vh - 265px) / 2) / 5);

  background: ${({ theme }) => theme.colors.boxColor};

  border: 3px solid transparent;

  transition: all 0.2s linear;

  &:hover {
    /* border-color: ${({ theme }) => theme.colors.textColor}; */
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    padding: calc((100vw - 120px) / 14);
    width: calc((100vw - 125px) / 2);
    height: calc((100vw - 125px) / 2);
  }

  @media (min-width: 600px) and (max-width: 1150px) {
    padding: calc((100vw - 120px) / 24);
    width: calc((100vw - 165px) / 3);
    height: calc((100vw - 165px) / 3);
  }
`;

export const HomeActionIcon = styled.span`
  font-size: calc((100vh - 120px) / 7);
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 600px) {
    font-size: calc((100vw - 120px) / 6);
  }

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: calc((100vw - 180px) / 9);
  }
`;

export const HomeActionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  text-align: center;
`;
