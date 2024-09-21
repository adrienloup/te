import { Sheet } from '../Sheet/Sheet';
import { Technical } from '../Technical/Technical';
import { Title } from '../Title/Title';
import { Tag } from '../Tag/Tag';
import { Icon } from '../Icon/Icon';
import styles from './Electricity.module.scss';

const Electricity = () => {
  return (
    <Sheet>
      <div className={styles.tutu}>
        <Title className={styles.title} tag="h2">
          Électricité
        </Title>
        <Tag>
          <Icon icon="network_wifi" />
        </Tag>
      </div>
      <Technical label="Compteur" value="Linky" />
      <Technical label="Code" value="GDO9984PPM" />
      <Technical label="Point de livraison" value="PDL-22Y785" />
      <Technical label="Fournisseur" value="EDF" />
      <Technical label="Raccordement" value="100%" />
      <Technical label="Conformité" value="CONSUEL" />
      <Technical label="Contrat" value="Premium" />
      <Technical label="Validité" value="22/03/2020" />
      <Technical label="Tarif" value="1 an" />
      <Technical label="Prix du kWh" value="0,5" />
      <Technical label="Prix HT" value="2X/an5" />
      <Technical label="Prix bloqué" value="22%" />
      <Technical label="RDV annuel" value="12/10/2024" />
    </Sheet>
  );
};

export default Electricity;
