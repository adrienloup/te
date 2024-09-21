import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Navigation.module.scss';

export const Navigation = ({ children, className }: PropType) => {
  return (
    <nav
      className={classNames([styles.navigation, className])}
      role="navigation"
    >
      {children}
    </nav>
  );
};
