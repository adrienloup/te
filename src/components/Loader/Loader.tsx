import { classNames } from '../../utils/classNames';
import styles from './Loader.module.scss';

interface loaderProps {
  size?: 'medium' | 'large';
}

export const Loader = ({ size = 'medium' }: loaderProps) => {
  return <div className={classNames([styles.loader, styles[size]])}></div>;
};
