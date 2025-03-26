import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OutroCard from './components/card-api/card-api';
import DetalhesPokemon from './components/card-detalhes-api/card-detalhes-api';
import { ThemeProvider } from './contexts/theme-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, children: [
      {
      path: '/outro-card',
      element: <OutroCard />
    },{
    path: '/detalhes-pokemon',
    element: <DetalhesPokemon />
  }
]
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
  );

reportWebVitals();
