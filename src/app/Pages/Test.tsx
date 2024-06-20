import React, { createContext, useContext } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { Translate } from '@mui/icons-material';

const ThemeContext = createContext('light');

const Test: React.FC = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar: React.FC = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton: React.FC = () => {
  const theme = useContext(ThemeContext);

  const muiTheme = createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <Button startIcon={<Translate />} 
        style={{ 
          background: theme === 'dark' ? '#333' : '#FFF', 
          color: theme === 'dark' ? '#FFF' : '#000' 
        }}
      >
        Текст, стилизированный через ThemeContext  
      </Button>
    </ThemeProvider>
  );
};

export default Test;
