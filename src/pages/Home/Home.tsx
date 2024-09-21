import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Page } from '../../layouts/Page';
import { Article } from '../../components/Article/Article';
import { Banner } from '../../components/Banner/Banner';
import { Button } from '../../components/Button/Button';

function Home() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useTitle(t('page.home.sort_title'));

  return (
    <Page>
      <Banner content={t('banner.promo')}></Banner>
      <Article>
        <h1>{t('page.home.title')}</h1>
        <div>
          <Button onClick={() => setTheme('light')}>light ({theme})</Button>
          <Button onClick={() => setTheme('dark')}>dark ({theme})</Button>
        </div>
        <div>
          <Button onClick={() => setLanguage('en')}>EN ({language})</Button>
          <Button onClick={() => setLanguage('fr')}>FR ({language})</Button>
        </div>
      </Article>
    </Page>
  );
}

export default Home;
