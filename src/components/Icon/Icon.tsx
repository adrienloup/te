import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Icon.module.scss';

interface IconProps extends PropType {
  icon: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return (
    <span aria-hidden={false} className={classNames([styles.icon, className])}>
      {icon}
    </span>
  );
};
