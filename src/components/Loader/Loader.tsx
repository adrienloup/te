import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import { SizeType } from '../../models/Size';
import styles from './Loader.module.scss';

interface LoaderProps extends Pick<PropType, 'className'> {
  size?: SizeType;
}

export const Loader = ({ size = 'medium', className }: LoaderProps) => {
  return (
    <div className={classNames([styles.loader, styles[size], className])}></div>
  );
};
