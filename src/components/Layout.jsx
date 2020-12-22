import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import NavBar from './NavBar';

export const siteTitle = 'Brian Blankenship';

const Layout = ({ children }) => (
  <Container maxWidth="xl">
    <Head>
      <meta name="description" content="A portfolio about Brian Blankenship." />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <NavBar />
    <main>
      {children}
    </main>
  </Container>
);

export default Layout;
