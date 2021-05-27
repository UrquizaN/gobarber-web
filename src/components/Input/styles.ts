import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  color: #666360;
  padding: 0px 8px;

  & + & {
    margin-top: 8px;
  }

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
    margin-right: 8px;
  }
`;
