import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { version } from '../../../package.json';
import { Tooltip } from '../Tooltip/Tooltip';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <Tooltip
          className={styles.tooltip}
          label={theme === 'dark' ? t('tooltip.light') : t('tooltip.dark')}
          position="top-start"
          onClick={toggleTheme}
        >
          <Button variant="secondary" tabIndex={-1}>
            <Icon
              className={styles.icon}
              icon={theme === 'dark' ? 'light_mode' : 'dark_mode'}
            />
          </Button>
        </Tooltip>
        <Tooltip
          className={styles.tooltip}
          label={t('tooltip.language')}
          position="top-start"
          onClick={toggleLanguage}
        >
          <Button variant="secondary" tabIndex={-1}>
            {language === 'fr' ? 'EN' : 'FR'}
          </Button>
        </Tooltip>
        <div className={styles.version}>&copy; TE {version}</div>
      </div>
    </footer>
  );
};
