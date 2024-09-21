import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Loader.module.scss';

interface loaderProps extends Omit<PropType, 'size'> {
  size?: 'medium' | 'large';
}

export const Loader = ({ size = 'medium', className }: loaderProps) => {
  return (
    <div className={classNames([styles.loader, styles[size], className])}></div>
  );
};
