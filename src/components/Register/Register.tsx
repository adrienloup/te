import { useState } from 'react';
import { testUsername } from '../../utils/testUsername';
import { testEmail } from '../../utils/testEmail';
import { testPassword } from '../../utils/testPassword';
import { testConfirm } from '../../utils/testConfirm';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import { StatusType } from '../../models/Status';
import { Form } from '../../components/Form/Form';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import styles from './Register.module.scss';

export const Register = () => {
  const { setUser } = useUser();
  const { setAccount } = useAuth();
  const [status, setStatus] = useState<StatusType>('info');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messageConfirm, setMessageConfirm] = useState('');

  const onChangeName = (value: string) => {
    if (testUsername(value)) setMessageName('');
    setName(value);
    setStatus('info');
  };

  const onChangeEmail = (value: string) => {
    if (testEmail(value)) setMessageEmail('');
    setEmail(value);
    setStatus('info');
  };

  const onChangePassword = (value: string) => {
    if (testPassword(value)) setMessagePassword('');
    setPassword(value);
    setStatus('info');
  };

  const onChangeConfirm = (value: string) => {
    if (testConfirm(password, value)) setMessageConfirm('');
    setConfirm(value);
    setStatus('info');
  };

  const onSubmit = () => {
    const id = new Date().getTime();

    if (!testUsername(name)) setMessageName('message1');
    if (!testEmail(email)) setMessageEmail('message2');
    if (!testPassword(password)) setMessagePassword('message3');
    if (!testConfirm(password, confirm)) setMessageConfirm('message4');
    if (
      testUsername(name) &&
      testEmail(email) &&
      testPassword(password) &&
      testConfirm(password, confirm)
    ) {
      // addAlert({ label: t('common.alert.valid') });
      setUser({ id, name, email, password });
      setAccount(true);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Form className={styles.register}>
      <p>Tous les champs sont obligatoires.</p>
      <TextField
        type="text"
        label="Your name"
        message={messageName}
        minLength={3}
        maxLength={10}
        status={status}
        value={name}
        name="username"
        autoComplete="username"
        onChange={(e) => onChangeName(e.target.value)}
      />
      <TextField
        type="email"
        label="Your email"
        message={messageEmail}
        status={status}
        value={email}
        name="email"
        autoComplete="email"
        onChange={(e) => onChangeEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Your password"
        message={messagePassword}
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
        label="Confirm your password"
        message={messageConfirm}
        minLength={3}
        maxLength={10}
        status={status}
        value={confirm}
        name="repeat"
        autoComplete="new"
        onChange={(e) => onChangeConfirm(e.target.value)}
      />
      <Button className={styles.button} onClick={() => onSubmit()}>
        Sign Up
      </Button>
    </Form>
  );
};
