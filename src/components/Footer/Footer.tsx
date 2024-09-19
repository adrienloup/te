import { version } from '../../../package.json';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>&copy; TE {version}</div>
    </footer>
  );
};
