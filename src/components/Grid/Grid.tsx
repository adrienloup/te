import { SlotType } from '../../models/Slot';
import styles from './Grid.module.scss';

export const Grid = ({ children }: { children: SlotType }) => {
  return <div className={styles.grid}>{children}</div>;
};
