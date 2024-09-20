import { Sheet } from '../Sheet/Sheet';
import { TechnicalValue } from '../TechnicalValue/TechnicalValue';

const GasSheet = () => {
  return (
    <Sheet>
      <h2>Votre consommation de gaz</h2>
      <TechnicalValue label="Compteur" value="Gazpar" />
      <TechnicalValue label="label2" value="value2" />
      <TechnicalValue label="label3" value="value3" />
      <TechnicalValue label="label4" value="value4" />
      <TechnicalValue label="label5" value="value5" />
      <TechnicalValue label="label6" value="value6" />
      <TechnicalValue label="label7" value="value7" />
      <TechnicalValue label="label8" value="value8" />
      <TechnicalValue label="label9" value="value9" />
      <TechnicalValue label="label10" value="value10" />
    </Sheet>
  );
};

export default GasSheet;
