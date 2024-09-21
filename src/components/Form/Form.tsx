import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Form.module.scss';

export const Form = ({ children, className }: PropType) => {
  return (
    <form action="" className={classNames([styles.form, className])}>
      {children}
    </form>
  );
};
