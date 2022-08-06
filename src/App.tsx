import React from 'react';
import {
  Routes,
  useRoutes,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="app">
      {
        useRoutes(routes)
      }
    </div>
  );
}

export default App;
