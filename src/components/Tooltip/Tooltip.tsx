import { classNames } from '../../utils/classNames';
import { PropType } from '../../models/Prop';
import { PositionType } from '../../models/Position';
import styles from './Tooltip.module.scss';

interface TooltipProps extends PropType {
  label: string;
  position?: PositionType;
  onClick?: () => void;
}

export const Tooltip = ({
  label,
  position = 'top',
  onClick = () => {},
  children,
  className,
}: TooltipProps) => {
  return (
    <div
      role="tooltip"
      tabIndex={0}
      className={classNames([styles.tooltip, className])}
      onClick={onClick}
      onKeyDown={(e) =>
        e.code === 'Enter' || e.code === 'Space' ? onClick() : undefined
      }
    >
      {children}
      <div className={classNames([styles.box, styles[position]])}>
        {label && <div className={styles.label}>{label}</div>}
      </div>
    </div>
  );
};
