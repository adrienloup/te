import { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../utils/classNames';
import { RefType } from '../../models/Ref';
import styles from './Button.module.scss';

type AttributesType<E> = ButtonHTMLAttributes<E> & LinkHTMLAttributes<E>;

interface ButtonProps<T> extends AttributesType<T> {
  variant?: 'primary' | 'secondary';
  innerRef?: RefType<T>;
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  innerRef,
  href,
  to,
  onClick,
  children,
  className,
  ...props
}: ButtonProps<HTMLButtonElement & HTMLAnchorElement>) => {
  const link = (
    <Link
      ref={innerRef}
      to={to!}
      className={classNames([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </Link>
  );

  const a = (
    <a
      ref={innerRef}
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
      ref={innerRef}
      type="button"
      onClick={onClick}
      className={classNames([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
