import { ReactNode } from 'react';
import styles from './Main.module.scss';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main} role="main">
      <div className={styles.inner}>{children}</div>
    </main>
  );
};
