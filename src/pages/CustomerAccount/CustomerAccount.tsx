import { useTitle } from '../../hooks/useTitle';
import { useTheme } from '../../hooks/useTheme';
import { Page } from '../../layouts/Page';
import { Button } from '../../components/Button/Button';
import styles from './CustomerAccount.module.scss';

function CustomerAccount() {
  useTitle('Espace client');

  const { theme, setTheme } = useTheme();

  return (
    <Page>
      <h1>Espace client</h1>
      <div>
        <Button className={styles.button} onClick={() => setTheme('light')}>
          light ({theme})
        </Button>
        <Button className={styles.button} onClick={() => setTheme('dark')}>
          dark ({theme})
        </Button>
      </div>
      <div style={{ height: '2000px' }}></div>
    </Page>
  );
}

export default CustomerAccount;
