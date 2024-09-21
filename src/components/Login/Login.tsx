import { useState } from 'react';
import { testUsername } from '../../utils/testUsername';
import { useAuth } from '../../hooks/useAuth';
import { StatusType } from '../../models/Status';
import { Form } from '../../components/Form/Form';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import styles from './Login.module.scss';

export const Login = () => {
  const { setAccount } = useAuth();
  const [status, setStatus] = useState<StatusType>('info');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [messageName, setMessageName] = useState('');
  const [messagePassword, setMessagePassword] = useState(''); // TODO

  const testName = (value: string) => /^[A-Za-z]{3,10}$/.test(value);
  const testPassword = (value: string) => /^[A-Za-z0-9]{3,10}$/.test(value);

  const onChangeName = (value: string) => {
    if (testName(value)) setMessageName('');
    setName(value);
    setStatus('info');
  };

  const onChangePassword = (value: string) => {
    if (testPassword(value)) setMessagePassword('');
    setPassword(value);
    setStatus('info');
  };

  const onSubmit = () => {
    if (!testUsername(name)) setMessageName('message1');
    if (!testPassword(password)) setMessagePassword('message2');
    if (testUsername(name) && testPassword(password)) {
      setAccount(true);
      setName('');
      setPassword('');
    }
  };

  return (
    <Form className={styles.login}>
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
        type="password"
        label="Your password"
        message={messagePassword}
        minLength={3}
        maxLength={10}
        status={status}
        value={password}
        name="password"
        autoComplete="password"
        onChange={(e) => onChangePassword(e.target.value)}
      />
      <Button onClick={() => onSubmit()}>
        tutu
        <Icon icon="save" />
      </Button>
    </Form>
  );
};
