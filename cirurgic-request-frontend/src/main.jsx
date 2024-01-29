import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Providers } from './providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer theme="colored" autoClose={2500} />
    <Providers>
      <BrowserRouter>
        <MyThemeProvider>
          <App />
        </MyThemeProvider>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
);
