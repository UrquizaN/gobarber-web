import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  width: 100%;
  padding: 0px 8px;

  border: 2px solid #232129;
  color: #666360;

  & + & {
    margin-top: 8px;
  }

  ${(props) => props.hasError && css`
    border: 2px solid #c53030;
  `}

  ${(props) =>
    props.isFocused
    && css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${(props) =>
    props.isFilled
    && css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    color: #f4ede8;
    padding: 16px 0;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin: 0 8px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }

`;
