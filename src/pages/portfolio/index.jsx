import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';

const AppGallery = () => (
  <Box className="body" maxWidth="xl">
    <Head>
      <title>App Gallery</title>
    </Head>
    <h1>Gallery of Apps</h1>
  </Box>
);

export default AppGallery;
