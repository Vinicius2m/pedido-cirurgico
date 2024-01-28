import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  background: ${({ theme }) => theme.colors.light};
`;
