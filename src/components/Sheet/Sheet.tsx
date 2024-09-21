import { SlotType } from '../../models/Slot';
import styles from './Sheet.module.scss';

export const Sheet = ({ children }: { children: SlotType }) => {
  return <div className={styles.sheet}>{children}</div>;
};
