import React from 'react';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Breadcrumbs } from '@material-ui/core';
import StyledBreadcrumb from '../../styles/MaterialUI/StyledBreadcrumb';

const Navbar = () => (
  <AppBar position="static">
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" passHref>
        <StyledBreadcrumb
          icon={<HomeIcon fontSize="small" />}
          label={<a>Home</a>}
        />
      </Link>
      <Link href="/portfolio" passHref>
        <StyledBreadcrumb
          label={<a>Portfolio</a>}
        />
      </Link>
      <Link href="/About" passHref>
        <StyledBreadcrumb
          label={<a>About</a>}
        />
      </Link>
      <Link href="/Contact" passHref>
        <StyledBreadcrumb
          label={<a>Contact</a>}
        />
      </Link>
    </Breadcrumbs>
  </AppBar>
);

export default Navbar;
