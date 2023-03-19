import './reset.css';
import './variables.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Basket from './pages/basket/basket';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/basket',
    element: <Basket />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
