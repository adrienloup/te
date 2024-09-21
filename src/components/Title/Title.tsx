import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Title.module.scss';

export const Title = ({
  tag: Tag = 'h1',
  children,
  className,
}: { tag?: 'h1' | 'h2' | 'h3' | 'h4' } & PropType) => {
  return (
    <Tag className={classNames([styles.title, className])}>{children}</Tag>
  );
};
