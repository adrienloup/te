import { ColorType } from '../../models/Color';
import { PropType } from '../../models/Prop';
import { SizeType } from '../../models/Size';
import { classNames } from '../../utils/classNames';
import styles from './Tag.module.scss';

interface TagProps extends Pick<PropType, 'children' | 'className'> {
  color?: ColorType;
  size?: SizeType;
}

export const Tag = ({
  color = 'green',
  size = 'small',
  children,
  className,
}: TagProps) => {
  return (
    <span
      className={classNames([
        styles.tag,
        styles[color],
        styles[size],
        className,
      ])}
    >
      {children}
    </span>
  );
};
