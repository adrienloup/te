import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import { useAlertDispatch } from '../../hooks/useAlert';
import { useUser } from '../../hooks/useUser';
import { Page } from '../../layouts/Page';
import { Article } from '../../components/Article/Article';
import { Banner } from '../../components/Banner/Banner';
import { Title } from '../../components/Title/Title';
import { Register } from '../../components/Register/Register';
import { Login } from '../../components/Login/Login';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import styles from './CustomerAccount.module.scss';

function CustomerAccount() {
  const { t } = useTranslation();
  const { user, setUser } = useUser();
  const { addAlert } = useAlertDispatch();

  useTitle(t('page.customer_account.sort_title'));

  useEffect(() => {
    if (!localStorage.getItem('_lcc_1em0m_3_user')) {
      setUser({ id: '', email: '', password: '', connected: false });
      addAlert({ label: t('alert.disconnection') });
    }
  }, []);

  return (
    <Page>
      <Article>
        <Title className={styles.title}>
          {t('page.customer_account.title')}
        </Title>
        {user.connected ? <Dashboard /> : user.id ? <Login /> : <Register />}
      </Article>
      <Banner className={styles.banner} content={t('banner.benefit')}></Banner>
    </Page>
  );
}

export default CustomerAccount;
