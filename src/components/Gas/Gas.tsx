import { Sheet } from '../Sheet/Sheet';
import { Technical } from '../Technical/Technical';
import { Title } from '../Title/Title';
import { Tag } from '../Tag/Tag';
import { Icon } from '../Icon/Icon';
import styles from './Gas.module.scss';

const Gas = () => {
  return (
    <Sheet>
      <div className={styles.tutu}>
        <Title className={styles.title} tag="h2">
          Gas
        </Title>
        <Tag color="red">
          <Icon icon="opacity" />
        </Tag>
      </div>
      <Technical label="Compteur" value="Gazpar" />
      <Technical label="label2" value="value2" />
      <Technical label="label3" value="value3" />
      <Technical label="label4" value="value4" />
      <Technical label="label5" value="value5" />
      <Technical label="label6" value="value6" />
      <Technical label="label7" value="value7" />
      <Technical label="label8" value="value8" />
      <Technical label="label9" value="value9" />
      <Technical label="label10" value="value10" />
    </Sheet>
  );
};

export default Gas;
