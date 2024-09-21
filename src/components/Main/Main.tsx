import { SlotType } from '../../models/Slot';
import styles from './Main.module.scss';

export const Main = ({ children }: { children: SlotType }) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
