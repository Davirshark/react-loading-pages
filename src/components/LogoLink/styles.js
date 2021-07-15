import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    > img {
      max-height: 3rem;
    }
  `}
`;
