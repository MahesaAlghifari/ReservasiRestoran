import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutInit from '../components/LayoutInit';
import Home from '../pages/home/Home';
import Reserve from '../pages/reserve/Reserve';
import Menu from '../pages/menu/Menu';
import Facility from '../pages/facility/Facility';

export default function BaseRoute() {
  const routes = [
    { path: 'home', element: <Home /> },
    { path: 'reserve', element: <Reserve /> },
    { path: 'menu', element: <Menu /> },
    { path: 'facility', element: <Facility /> },
    { path: 'menu', element: <Menu /> },
  ];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Route for Main page */}
        <Route
          path="/"
          element={
            <LayoutInit>
              <Home />
            </LayoutInit>
          }
        />
        {/* Routes for other paths */}
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={`/${route.path}`} 
            element={
              <LayoutInit>
                {route.element}
              </LayoutInit>} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
