import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '../package.json';
import App from './App.tsx';

console.log(
  `%c[TE]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #108775; font-weight: bold; color: #00c48d;',
  'padding: 4px 3px 3px; background: #00c48d; font-weight: bold; color: #108775;',
  'padding: 4px 3px 3px; background: #108775; font-weight: bold; color: #00c48d;'
);

createRoot(document.getElementById('_te_1em2m_3')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
