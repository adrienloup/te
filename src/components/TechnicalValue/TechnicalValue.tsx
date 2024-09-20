import styles from './TechnicalValue.module.scss';

interface TechnicalValueProps {
  label: string;
  value: string;
}

export const TechnicalValue = ({ label, value }: TechnicalValueProps) => {
  return (
    <div className={styles['technical-value']}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};
