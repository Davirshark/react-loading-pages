import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    alignt-items: center;
    > img {
      max-height: 3rem;
    }
  `}
`;
