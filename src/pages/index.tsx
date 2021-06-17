import Head from 'next/head';

const Home = () => (
  <div>
    <style jsx global>
      {`
        body {
          box-sizing: border-box;
          font-family: "Fira Code", "Fira Sans", sans-serif, Roboto;
          font-size: 16px;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    </style>

    <Head>
      <title>Brian Blankenship</title>
      <meta name="description" content="A portfolio for Brian Blankenship" />
    </Head>
  </div>
);

export default Home;
