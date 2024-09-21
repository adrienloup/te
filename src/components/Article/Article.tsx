import { SlotType } from '../../models/Slot';
import styles from './Article.module.scss';

export const Article = ({ children }: { children: SlotType }) => {
  return (
    <article className={styles.article} role="article">
      {children}
    </article>
  );
};
