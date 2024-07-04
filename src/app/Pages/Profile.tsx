import React, { Suspense, useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UserSettings from '../../components/UserSettings';
import Dashboard from '../../components/Dashboard';
import { getStoredTheme, setStoredTheme } from '../../utiles/theme';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import ChartComponent from '../../components/ChartComponent';
import UserDashboardSettings from '../../components/UserDashboardSettings';
import DataTable from '../../components/DataTable';
import redTheme from '../../theme/redTheme';
import grayTheme from '../../theme/grayTheme';
import { getUserSettings, saveUserSettings } from '../../utiles/userSettings';
import { getFeatureToggles } from '../../utiles/featureToggle';

const BigComponent = React.lazy(() => import('../../components/BigComponent'));

const Profiles: React.FC = () => {
  const { t } = useTranslation();
  const storedTheme = getStoredTheme();
  const userSettings = getUserSettings();
  const [theme, setTheme] = useState<'red' | 'gray'>(storedTheme || 'red');
  const [muiTheme, setMuiTheme] = useState(createTheme(theme === 'red' ? redTheme : grayTheme));
  const [tabIndex, setTabIndex] = useState(0);
  const [featureToggles] = useState(getFeatureToggles());

  useEffect(() => {
    setMuiTheme(createTheme(theme === 'red' ? redTheme : grayTheme));
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === 'red' ? 'gray' : 'red';
    setTheme(newTheme);
    setStoredTheme(newTheme);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleUserSettingsChange = (settings: any) => {
    saveUserSettings(settings);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Typography sx={{ marginLeft: '20px' }}>
        {t('welcome')}
      </Typography>
      <ThemeSwitcher currentTheme={theme} onChange={handleThemeChange} />
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Дэшборд" />
        <Tab label="Настройки" />
        <Tab label="Данные" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tabIndex === 0 && (
          <Suspense fallback={<div>Загрузка компонента...</div>}>
            <BigComponent />
            {featureToggles.featureA && <ChartComponent />}
            <Dashboard />
          </Suspense>
        )}
        {tabIndex === 1 && <UserDashboardSettings settings={userSettings} onChange={handleUserSettingsChange} />}
        {tabIndex === 2 && <DataTable />}
      </Box>
      <Suspense fallback={<div>Загрузка...</div>}>
        <UserSettings onThemeChange={handleThemeChange} />
      </Suspense>
    </ThemeProvider>
  );
};

export default Profiles;
