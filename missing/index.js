import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext'
M.AutoInit();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ThemeProvider>
     <BrowserRouter>
    <App />
    </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);

