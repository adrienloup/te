import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { version } from '../../../package.json';
import { Tooltip } from '../Tooltip/Tooltip';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <Tooltip
          className={styles.tooltip}
          label={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
          position="top-start"
          onClick={toggleTheme}
          onKeyDown={toggleTheme}
        >
          <Button className={styles.button} tabIndex={-1} onClick={toggleTheme}>
            <Icon
              className={styles.icon}
              icon={theme === 'dark' ? 'dark_mode' : 'light_mode'}
            />
          </Button>
        </Tooltip>
        <Tooltip
          className={styles.tooltip}
          label={`Langue ${language === 'fr' ? 'anglaise' : 'française'}`}
          position="top-start"
          onClick={toggleLanguage}
          onKeyDown={toggleLanguage}
        >
          <Button
            className={styles.button}
            tabIndex={-1}
            onClick={toggleLanguage}
          >
            {language === 'fr' ? 'FR' : 'EN'}
          </Button>
        </Tooltip>
        <div className={styles.version}>&copy; TE {version}</div>
      </div>
    </footer>
  );
};
