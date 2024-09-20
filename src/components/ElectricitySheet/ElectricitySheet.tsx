import { Sheet } from '../Sheet/Sheet';
import { TechnicalValue } from '../TechnicalValue/TechnicalValue';

const ElectricitySheet = () => {
  return (
    <Sheet>
      <h2>Votre consommation d'électricité</h2>
      <TechnicalValue label="Compteur" value="Linky" />
      <TechnicalValue label="Code" value="GDO9984PPM" />
      <TechnicalValue label="Point de livraison" value="PDL-22Y785" />
      <TechnicalValue label="Fournisseur" value="EDF" />
      <TechnicalValue label="Raccordement" value="100%" />
      <TechnicalValue label="Attestation de Conformité" value="CONSUEL" />
      <TechnicalValue label="Contrat" value="Premium" />
      <TechnicalValue label="Validité" value="22/03/2020" />
      <TechnicalValue label="Tarif réglementé de vente" value="1 an" />
      <TechnicalValue label="Prix du kWh" value="0,5" />
      <TechnicalValue label="Prix HT" value="2X/an5" />
      <TechnicalValue label="Prix bloqué" value="22%" />
      <TechnicalValue label="RDV énergie annuel" value="12/10/2024" />
    </Sheet>
  );
};

export default ElectricitySheet;
