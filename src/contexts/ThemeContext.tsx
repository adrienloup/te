import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeType } from '../models/Theme';
import { SlotType } from '../models/Slot';

export const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: 'light',
  setTheme: (theme: ThemeType) => theme,
});

export function ThemeProvider({ children }: { children: SlotType }) {
  const [theme, setTheme] = useLocalStorage<ThemeType>(
    '_te_1mm2m_3_theme',
    'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('_dark_1mm2m_3');
    } else {
      document.body.classList.remove('_dark_1mm2m_3');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
