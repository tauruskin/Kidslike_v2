import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./Views/LoginView')),
    private: false,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./Views/AuthView')),
    private: false,
  },
  {
    path: '/registration',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./Views/AuthView')),
    private: false,
  },
  {
    path: '/test',
    label: 'Test Page',
    exact: true,
    component: lazy(() => import('./Views/TestView')),
    private: false,
  },
  {
    path: '/home',
    label: 'Home',
    exact: false,
    component: lazy(() => import('./Views/HomeView')),
    private: false,
  },
  {
    path: '/gifts',
    label: 'Gifts',
    exact: true,
    component: lazy(() => import('./Views/GiftsView')),
    private: false,
  },
];
