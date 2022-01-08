import styled from 'styled-components';

export const SuppliesAccordionCheckBoxInput = styled.input`
  display: none;

  &:checked ~ label i {
    transition: all 0.2s linear;
    transform: rotateZ(90deg);
  }

  &:checked ~ div {
    transition: all 0.4s linear;
    height: 250px;
  }
`;
