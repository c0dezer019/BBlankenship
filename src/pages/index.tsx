import Head from 'next/head';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';

const Home = () => (
  <>
    <Head>
      <title>Brian Blankenship</title>
      <meta name="description" content="A portfolio for Brian Blankenship" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <NavBar />
      <Intro />
    </main>
  </>
);

export default Home;
