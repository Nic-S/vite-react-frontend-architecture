import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { setupStore } from './core/store';
import { setErrorInterceptor, setJwtInterceptor } from './core/interceptors';
import App from './App';
import { worker } from './mocks/browser';

if (import.meta.env.DEV) {
  worker.start();
}

setJwtInterceptor();
setErrorInterceptor();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <ToastContainer theme='colored' />
          <App />
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
