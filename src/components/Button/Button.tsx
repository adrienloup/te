import { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../utils/classNames';
import styles from './Button.module.scss';

type Attr<E> = ButtonHTMLAttributes<E> & LinkHTMLAttributes<E>;

interface ButtonProps extends Attr<HTMLButtonElement & HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  href,
  to,
  onClick,
  children,
  className,
  ...props
}: ButtonProps) => {
  const link = (
    <Link
      to={to!}
      className={classNames([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </Link>
  );

  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={classNames([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </a>
  );

  const button = (
    <button
      onClick={onClick}
      className={classNames([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
