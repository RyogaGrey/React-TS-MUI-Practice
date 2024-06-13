import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { PageOne, PageTwo } from './Pages';
import Test from './Pages/Test';

// Пример Context
//const ThemeContext = React.createContext('light');

// Интерфейс для маршрутов, чтоб не прописывать
interface RouteType {
  path: string;
  element: React.ReactElement;
}

// Для передачи через дерево, "Глобальные данные"
const RoutesContext = React.createContext<RouteType[]>([]);
// Маршруты (объекты типа RouteType с определёнными полями)
const homeRoute: RouteType = { path: "home", element: <Home /> };
const aboutRoute: RouteType = { path: "about", element: <About /> };
const pageOneRoute: RouteType = { path: "one", element: <PageOne /> };
const pageTwoRoute: RouteType = { path: "two", element: <PageTwo /> };
const testRoute: RouteType = { path: "test", element: <Test /> };
const errRoute: RouteType = {path: "*", element: homeRoute.element}

const routes: RouteType[] = [homeRoute, aboutRoute, pageOneRoute, pageTwoRoute, testRoute, errRoute];

const App: React.FC = () => {
  return (
    // Компонент Provider принимает проп value,
    // который будет передан во все компоненты,
    // использующие этот контекст и являющиеся
    // потомками этого компонента Provider.

    // Здесь: массив маршрутов
    <RoutesContext.Provider value={routes}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </RoutesContext.Provider>
  );
};

// Создание маршрутов из массива с маршрутами
const RoutesComponent: React.FC = () => {
  const routes = React.useContext(RoutesContext);
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;

// Заменить Route path="one" element={<PageOne />} на переменные
// Изучить Content.Provider

// Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.