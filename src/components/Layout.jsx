import React from 'react';
import { Box } from '@material-ui/core';
import Head from 'next/head';
import Footer from './Footer';
import NavBar from './NavBar';

export const siteTitle = 'Brian Blankenship';

const Layout = ({ children }) => (
  <Box maxWidth="xl">
    <Head>
      <meta name="description" content="A portfolio about Brian Blankenship." />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <NavBar />
    <main>
      {children}
      <Footer />
    </main>
  </Box>
);

export default Layout;
