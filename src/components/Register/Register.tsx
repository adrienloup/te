import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { testEmail } from '../../utils/testEmail';
import { testPassword } from '../../utils/testPassword';
import { testConfirm } from '../../utils/testConfirm';
import { useUser } from '../../hooks/useUser';
import { useAlertDispatch } from '../../hooks/useAlert';
import { StatusType } from '../../models/Status';
import { Form } from '../../components/Form/Form';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import styles from './Register.module.scss';

export const Register = () => {
  const { t } = useTranslation();
  const { setUser } = useUser();
  const { addAlert } = useAlertDispatch();
  const [status, setStatus] = useState<StatusType>('info');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [messageEmail, setMessageEmail] = useState(false);
  const [messagePassword, setMessagePassword] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState(false);

  const onChangeEmail = (value: string) => {
    if (testEmail(value)) setMessageEmail(false);
    setEmail(value);
    setStatus('info');
  };

  const onChangePassword = (value: string) => {
    if (testPassword(value)) setMessagePassword(false);
    setPassword(value);
    setStatus('info');
  };

  const onChangeConfirm = (value: string) => {
    if (testConfirm(password, value)) setMessageConfirm(false);
    setConfirm(value);
    setStatus('info');
  };

  const onSubmit = () => {
    const id =
      Math.random().toString(36).slice(2, 9) +
      new Date().getTime().toString(36);

    if (!testEmail(email)) setMessageEmail(true);
    if (!testPassword(password)) setMessagePassword(true);
    if (!testConfirm(password, confirm)) setMessageConfirm(true);

    if (
      testEmail(email) &&
      testPassword(password) &&
      testConfirm(password, confirm)
    ) {
      setUser({ id, email, password, connected: true });
      addAlert({ label: t('alert.create') });
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Form className={styles.form}>
      <p className={styles.legend}>{t('form.legend')}</p>
      <TextField
        type="email"
        label={t('form.email')}
        message={messageEmail ? t('form.message.email') : ''}
        status={status}
        value={email}
        name="email"
        autoComplete="email"
        onChange={(e) => onChangeEmail(e.target.value)}
      />
      <TextField
        type="password"
        label={t('form.password')}
        message={messagePassword ? t('form.message.password') : ''}
        minLength={3}
        maxLength={10}
        status={status}
        value={password}
        name="new"
        autoComplete="new"
        onChange={(e) => onChangePassword(e.target.value)}
      />
      <TextField
        type="password"
        label={t('form.confirm')}
        message={messageConfirm ? t('form.message.confirm') : ''}
        minLength={3}
        maxLength={10}
        status={status}
        value={confirm}
        name="repeat"
        autoComplete="new"
        onChange={(e) => onChangeConfirm(e.target.value)}
      />
      <Button className={styles.button} onClick={() => onSubmit()}>
        {t('button.register')}
      </Button>
    </Form>
  );
};
