import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';

function ElectricityAndGas() {
  useTitle('Électricité et Gaz');

  return (
    <Page>
      <h1>Électricité et Gaz</h1>
    </Page>
  );
}

export default ElectricityAndGas;
