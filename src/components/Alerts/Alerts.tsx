import { SlotType } from '../../models/Slot';
import styles from './Alerts.module.scss';

export const Alerts = ({ children }: { children: SlotType }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
