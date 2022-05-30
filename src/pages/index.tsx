import Head from 'next/head';
import NavBar from '../components/molecules/NavBar';
import Intro from '../components/molecules/Intro';
import ScrollDown from '../components/organisms/scrollAnimation/ScrollDown';

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
    <aside>
      <ScrollDown />
    </aside>
  </>
);

export default Home;
