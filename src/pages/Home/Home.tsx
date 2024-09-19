import { lazy, Suspense } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Page } from '../../layouts/Page';
import { Loader } from '../../components/Loader/Loader';

const Tutu = lazy(() => import('../../components/Tutu/Tutu'));

function Home() {
  useTitle("Fournisseur d'énergie");

  return (
    <Page>
      <Suspense fallback={<Loader />}>
        <Tutu />
      </Suspense>
      <h1>Fournisseur d'énergie</h1>
    </Page>
  );
}

export default Home;
