import styles from './Technical.module.scss';

interface TechnicalProps {
  label: string;
  value: string;
}

export const Technical = ({ label, value }: TechnicalProps) => {
  return (
    <div className={styles.technical}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};
