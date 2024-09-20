import { HTMLProps } from 'react';
import { classNames } from '../../utils/classNames';
import { PositionType } from '../../models/Position';
import styles from './Tooltip.module.scss';

interface TooltipProps extends HTMLProps<HTMLElement> {
  label: string;
  position?: PositionType;
  onClick?: () => void;
  onKeyDown?: () => void;
}

export const Tooltip = ({
  label,
  position = 'top',
  onClick = () => {},
  onKeyDown = () => {},
  children,
  className,
}: TooltipProps) => {
  return (
    <div
      role="tooltip"
      tabIndex={0}
      className={classNames([
        styles.tooltip,
        onClick() ? styles.pointer : '',
        className,
      ])}
      onClick={onClick}
      onKeyDown={(e) =>
        e.code === 'Enter' || e.code === 'Space' ? onKeyDown() : undefined
      }
    >
      {children}
      <div className={classNames([styles.box, styles[position]])}>
        {label && <div className={styles.label}>{label}</div>}
      </div>
    </div>
  );
};
