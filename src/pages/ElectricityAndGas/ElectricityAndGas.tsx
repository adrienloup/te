import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';

function ElectricityAndGas() {
  const { t } = useTranslation();

  useTitle(t('page.electricity_and_gas.sort_title'));

  return (
    <Page>
      <h1>{t('page.electricity_and_gas.sort_title')}</h1>
    </Page>
  );
}

export default ElectricityAndGas;
