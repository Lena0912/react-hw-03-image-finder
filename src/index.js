import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    accent: '#789e73',
    buttonAccent: '#8eba88',
    grey: '#9e9c9c',
    error: '#dc143c',
    bgInput: '#f9f0da',
    white: '#fff',
    textColor: '#242222',
  },
  radii: {
    sm: '5px',
    md: '10px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
