import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme} >
      {element}
    </ThemeProvider>
  );
}