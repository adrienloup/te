import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';

function ElectricVehicles() {
  const { t } = useTranslation();

  useTitle(t('page.electric_vehicles.sort_title'));

  return (
    <Page>
      <h1>{t('page.electric_vehicles.sort_title')}</h1>
    </Page>
  );
}

export default ElectricVehicles;
