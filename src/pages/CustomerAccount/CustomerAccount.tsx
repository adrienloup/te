import { lazy, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { delayFallback } from '../../utils/delayFallback';
import { useTitle } from '../../hooks/useTitle';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import { Page } from '../../layouts/Page';
import { Article } from '../../components/Article/Article';
import { Banner } from '../../components/Banner/Banner';
import { Loader } from '../../components/Loader/Loader';
import { Grid } from '../../components/Grid/Grid';
import { Button } from '../../components/Button/Button';
import { Register } from '../../components/Register/Register';
import { Login } from '../../components/Login/Login';

const ElectricitySheet = lazy(() =>
  delayFallback(
    import('../../components/ElectricitySheet/ElectricitySheet'),
    1e3
  )
);

const GasSheet = lazy(() =>
  delayFallback(import('../../components/GasSheet/GasSheet'), 5e2)
);

function CustomerAccount() {
  const { t } = useTranslation();
  const { user, setUser } = useUser();
  const { account, setAccount } = useAuth();

  useTitle(t('page.customer_account.sort_title'));

  useEffect(() => {
    // @TODO
    if (!localStorage.getItem('_lcc_1em0m_3_user')) {
      setUser({ ...user, id: 0 });
      setAccount(false);
    }
  }, []);

  return (
    <Page>
      <Article>
        <h1>{t('page.customer_account.title')}</h1>
        {account ? (
          <>
            <Grid>
              <Suspense fallback={<Loader />}>
                <ElectricitySheet />
              </Suspense>
              <Suspense fallback={<Loader />}>
                <GasSheet />
              </Suspense>
            </Grid>
            <Button onClick={() => setAccount(false)}>Logout</Button>
          </>
        ) : user.id === 0 ? (
          <Register />
        ) : (
          <Login />
        )}
      </Article>
      <Banner content={t('banner.benefit')}></Banner>
    </Page>
  );
}

export default CustomerAccount;
