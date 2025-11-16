import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './context/UserContext';
import { SearchProvider } from "./context/SearchContext";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </UserProvider>
  </StrictMode>
);
