import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllProviders } from './utils/AllProviders.tsx';
import { version } from '../package.json';
import App from './App.tsx';
import './i18n';

console.log(
  `%c[TE]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #0053ff; font-weight: bold; color: #05ff00;',
  'padding: 4px 3px 3px; background: #05ff00; font-weight: bold; color: #0053ff;',
  'padding: 4px 3px 3px; background: #0053ff; font-weight: bold; color: #05ff00;'
);

createRoot(document.getElementById('_te_1mm2m_3')!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
