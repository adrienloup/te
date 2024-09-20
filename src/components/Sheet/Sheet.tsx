import { ReactNode } from 'react';
import styles from './Sheet.module.scss';

export const Sheet = ({ children }: { children: ReactNode }) => {
  return <div className={styles.sheet}>{children}</div>;
};
