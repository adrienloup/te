import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { delayFallback } from '../../utils/delayFallback';
import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';
import { Loader } from '../../components/Loader/Loader';
import { Grid } from '../../components/Grid/Grid';

const ElectricitySheet = lazy(() =>
  delayFallback(
    import('../../components/ElectricitySheet/ElectricitySheet'),
    2e3
  )
);

const GasSheet = lazy(() =>
  delayFallback(import('../../components/GasSheet/GasSheet'), 1e3)
);

function CustomerAccount() {
  const { t } = useTranslation();

  useTitle(t('page.customer_account.sort_title'));

  return (
    <Page>
      <h1>{t('page.customer_account.title')}</h1>
      <Grid>
        <Suspense fallback={<Loader />}>
          <ElectricitySheet />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <GasSheet />
        </Suspense>
      </Grid>
    </Page>
  );
}

export default CustomerAccount;
