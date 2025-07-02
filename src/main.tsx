import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './components/router/Router.tsx';
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
