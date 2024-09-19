import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';

function ElectricVehicles() {
  useTitle('Véhicules électriques');

  return (
    <Page>
      <h1>Véhicules électriques</h1>
    </Page>
  );
}

export default ElectricVehicles;
