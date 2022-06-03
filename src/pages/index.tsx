import Head from 'next/head';
import NavBar from '../components/organisms/NavBar';
import { SectionOne, SectionTwo } from '../components/layouts';

const Home = () => (
  <>
    <Head>
      <title>Brian Blankenship</title>
      <meta name="description" content="A portfolio for Brian Blankenship" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <NavBar />
      <SectionOne />
    </main>
  </>
);

export default Home;
