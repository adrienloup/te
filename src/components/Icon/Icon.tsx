import { HTMLProps } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Icon.module.scss';

interface IconProps extends HTMLProps<HTMLElement> {
  icon: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return (
    <span aria-hidden={false} className={classNames([styles.icon, className])}>
      {icon}
    </span>
  );
};
