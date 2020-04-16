import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MainPage from './views/Main/MainPage.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {

  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#87C34B',
            contrastText: 'white',
          },
          secondary: {
            main: '#00569C',
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }), [prefersDarkMode]);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
