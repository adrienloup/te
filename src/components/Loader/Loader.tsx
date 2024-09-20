import { HTMLProps } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Loader.module.scss';

interface loaderProps extends Omit<HTMLProps<HTMLElement>, 'size'> {
  size?: 'medium' | 'large';
}

export const Loader = ({ size = 'medium', className }: loaderProps) => {
  return (
    <div className={classNames([styles.loader, styles[size], className])}></div>
  );
};
