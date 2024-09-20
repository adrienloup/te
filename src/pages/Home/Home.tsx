import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Page } from '../../layouts/Page';
import { Button } from '../../components/Button/Button';
import styles from './Home.module.scss';

function Home() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useTitle(t('page.home.sort_title'));

  return (
    <Page>
      <h1>{t('page.home.title')}</h1>
      <div>
        <Button className={styles.button} onClick={() => setTheme('light')}>
          light ({theme})
        </Button>
        <Button className={styles.button} onClick={() => setTheme('dark')}>
          dark ({theme})
        </Button>
      </div>
      <div>
        <Button className={styles.button} onClick={() => setLanguage('en')}>
          EN ({language})
        </Button>
        <Button className={styles.button} onClick={() => setLanguage('fr')}>
          FR ({language})
        </Button>
      </div>
    </Page>
  );
}

export default Home;
