import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import Navbar from './Navbar';

export const siteTitle = 'Brian Blankenship';

const Layout = ({ children }) => (
  <Container>
    <Head>
      <meta name="description" content="A portfolio about Brian Blankenship." />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Navbar />
    <main>
      {children}
    </main>
  </Container>
);

export default Layout;
