import { ReactNode } from 'react';
import styles from './Grid.module.scss';

export const Grid = ({ children }: { children: ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};
