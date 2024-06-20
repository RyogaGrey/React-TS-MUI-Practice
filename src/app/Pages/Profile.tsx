
import React, { Suspense, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import UserSettings from '../../components/UserSettings';
import Dashboard from '../../components/Dashboard';
//import { getThemeFromLocalStorage, saveThemeToLocalStorage } from './utils/theme';

const Profiles: React.FC = () => {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: /*getThemeFromLocalStorage() ||*/ 'light',
    },
  }));

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(createTheme({ palette: { mode: newTheme } }));
    /*saveThemeToLocalStorage(newTheme);*/
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <UserSettings onThemeChange={handleThemeChange} />
        <Dashboard />
      </Suspense>
    </ThemeProvider>
  );
};

export default Profiles;

// TODO:
// Графики Chart
// Вкладка пользователя (настройки дашборда (запоминать положение дашбордов)) 
// Создать большой компонент (чтобы много весил в bundle).
// Загружать только при первом входе на стр. (LazyLoading)
// функция + тесты (viteTest)
// после отработки тестов сделать case демонстрация полезности кейса 6 темизация.
// Min 2 темы(красный, белый, серый)(другие для второй темы)
// Тема должна выбираться в зависимости от настроек пользователя (на пк или браузере)
// Тема не должна слетать после перезагрузки страницы
// автоматическая темизация по switch (отключение / включение)
// локализация (закреп)
// *минимум css файлов. StyledComponents (MUI) 12 react managing State (на странице юзера)
// persistance (сохранение настроек пользователя)
// front логирование (отлов любых ошибок + отсылка на api (docker container + прометей))
// featureToggle (отображение/скрытие элементов на странице в профиле user'a) создать 2к данных + scroll. Возможность редактировать записи. docker container!