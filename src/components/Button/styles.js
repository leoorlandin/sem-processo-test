import styled from 'styled-components';

export const Button = styled.button`
  color: #FFFFFF;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: linear-gradient(90deg, #3AE4DF 0%, #7A88FF 104.29%);
  border-radius: 5px;
  border: none;

  &:hover{
    opacity: 0.9;
  }
`;