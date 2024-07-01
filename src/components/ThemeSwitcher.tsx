import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

type ThemeSwitcherProps = {
  currentTheme: 'red' | 'gray';
  onChange: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onChange }) => {
  return (
    <FormControlLabel
      control={<Switch checked={currentTheme === 'gray'} onChange={onChange} />}
      label="Тёмный режим"
    />
  );
};

export default ThemeSwitcher;
