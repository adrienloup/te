import { CSSProperties, useEffect, useRef, useState } from 'react';
import { AlertType } from '../../models/Alert';
import { Icon } from '../Icon/Icon';
import styles from './Alert.module.scss';

export const Alert = ({
  label,
  duration = 2e3,
  onRemove = () => {},
}: AlertType) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    outTimer.current = setTimeout(() => {
      setOut(true);
    }, duration) as unknown as number;

    removeTimer.current = setTimeout(() => {
      onRemove();
    }, duration + 150) as unknown as number;

    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      role="alert"
      className={[styles.alert, out ? ` ${styles.out}` : ''].join('')}
      style={
        {
          '--duration': `${duration}ms`,
        } as CSSProperties
      }
    >
      <Icon className={styles.icon} icon="info" />
      <div className={styles.label}>{label}</div>
      <div className={styles.progress}></div>
    </div>
  );
};
