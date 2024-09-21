import { createContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LanguageType } from '../models/Language';
import { SlotType } from '../models/Slot';

export const LanguageContext = createContext<{
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}>({
  language: 'en',
  setLanguage: (language: LanguageType) => language,
});

export function LanguageProvider({ children }: { children: SlotType }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<LanguageType>(
    '_lcc_1em0m_3_language',
    'en'
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
