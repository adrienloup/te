import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { testPassword } from '../../utils/testPassword';
import { useUser } from '../../hooks/useUser';
import { useAlertDispatch } from '../../hooks/useAlert';
import { StatusType } from '../../models/Status';
import { Form } from '../../components/Form/Form';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import styles from './Login.module.scss';

export const Login = () => {
  const { t } = useTranslation();
  const { user, setUser } = useUser();
  const { addAlert } = useAlertDispatch();
  const [status, setStatus] = useState<StatusType>('info');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  const onChangePassword = (value: string) => {
    if (testPassword(value)) setMessage(false);
    setPassword(value);
    setStatus('info');
  };

  const onSubmit = () => {
    if (testPassword(password)) {
      setUser({ ...user, connected: true });
      addAlert({ label: t('alert.connection') });
      setPassword('');
    } else {
      setMessage(true);
    }
  };

  return (
    <Form className={styles.form}>
      <TextField
        type="password"
        label={t('form.password')}
        message={message ? t('form.message.password') : ''}
        minLength={3}
        maxLength={10}
        status={status}
        value={password}
        name="password"
        autoComplete="password"
        onChange={(e) => onChangePassword(e.target.value)}
      />
      <Button className={styles.button} onClick={() => onSubmit()}>
        {t('button.login')}
      </Button>
    </Form>
  );
};
