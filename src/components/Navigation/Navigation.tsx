import { HTMLProps } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Navigation.module.scss';

export const Navigation = ({ children, className }: HTMLProps<HTMLElement>) => {
  return (
    <nav
      className={classNames([styles.navigation, className])}
      role="navigation"
    >
      {children}
    </nav>
  );
};
