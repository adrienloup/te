import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { delayFallback } from '../../utils/delayFallback';
import { useAlertDispatch } from '../../hooks/useAlert';
import { useUser } from '../../hooks/useUser';
import { Loader } from '../Loader/Loader';
import { Grid } from '../Grid/Grid';
import { Button } from '../Button/Button';
import styles from './Dashboard.module.scss';

const Electricity = lazy(() =>
  delayFallback(import('../Electricity/Electricity'), 6e2)
);
const Gas = lazy(() => delayFallback(import('../Gas/Gas'), 2e2));
const Index = lazy(() => delayFallback(import('../Index/Index'), 4e2));

export const Dashboard = () => {
  const { t } = useTranslation();
  const { user, setUser } = useUser();
  const { addAlert } = useAlertDispatch();

  const login = () => {
    setUser({ ...user, connected: false });
    addAlert({ label: t('alert.disconnection') });
  };

  return (
    <>
      <Grid>
        <Suspense fallback={<Loader />}>
          <Electricity />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Gas />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Index />
        </Suspense>
      </Grid>
      <Button className={styles.button} onClick={() => login()}>
        {t('button.logout')}
      </Button>
    </>
  );
};
