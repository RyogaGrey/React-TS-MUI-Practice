import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface UserSettingsProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({ onThemeChange }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <Button onClick={() => changeLanguage('ru')}>RU</Button>
      <Button onClick={() => changeLanguage('es')}>ES</Button>
    </div>
  );
};

export default UserSettings;
