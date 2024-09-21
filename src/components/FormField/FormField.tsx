import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './FormField.module.scss';

interface FormFieldProps extends PropType {
  label?: string;
  helper?: string;
  message?: string;
}

export const FormField = ({
  label,
  helper,
  message,
  children,
  className,
}: FormFieldProps) => {
  return (
    <div className={classNames([styles.formfield, className])}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {message ? (
        <div className={styles.message}>{message}</div>
      ) : helper ? (
        <div className={styles.helper}>{helper}</div>
      ) : null}
    </div>
  );
};
