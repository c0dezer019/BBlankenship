import Head from 'next/head';

import MainContent from '../components/layouts/MainContent';
import NavBar from '../components/organisms/NavBar';

const Home = () => (
  <>
    <Head>
      <title>Brian Blankenship</title>
      <meta name="description" content="A portfolio for Brian Blankenship" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <main>
      <MainContent />
    </main>
  </>
);

export default Home;
