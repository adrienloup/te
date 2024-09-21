import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import styles from './Banner.module.scss';

export const Banner = ({
  content,
  className,
}: { content: string } & PropType) => {
  return (
    <div
      role="complementary"
      className={classNames([styles.banner, className])}
    >
      <div
        className={styles.inner}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};
