import React from 'react';

const ThemeContext = React.createContext('light');

const Test: React.FC = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
      Текст, стилизированный через ThemeContext
    </button>
  );
};

export default Test;
