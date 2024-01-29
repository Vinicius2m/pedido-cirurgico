import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import PropTypes from 'prop-types';
import { GlobalStyles } from './global-styles';

export const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyles />
  </ThemeProvider>
);

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
