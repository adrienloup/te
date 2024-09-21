import { useId } from 'react';
import { classNames } from '../../utils/classNames';
import { StatusType } from '../../models/Status';
import { FormField } from '../FormField/FormField';
import styles from './TextField.module.scss';

interface TextFieldProps {
  cssClass?: string;
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  helper?: string;
  message?: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
  status?: StatusType;
  name?: string;
  autoComplete?: string;
  onChange: (e: { target: { value: string } }) => void;
}

export const TextField = ({
  cssClass,
  id,
  type = 'text',
  label,
  placeholder,
  helper,
  message,
  minLength,
  maxLength,
  value,
  status,
  name,
  autoComplete,
  onChange,
}: TextFieldProps) => {
  const uId = useId();

  return (
    <FormField label={label} helper={helper} message={message}>
      <div
        className={classNames([
          styles.textfield,
          message ? styles.error : styles[status!],
          cssClass,
        ])}
      >
        <input
          type={type}
          id={id ? id : uId}
          name={name}
          autoComplete={autoComplete}
          className={styles.input}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
      </div>
    </FormField>
  );
};
