import React from 'react';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Breadcrumbs } from '@material-ui/core';
import StyledBreadcrumb from '../../styles/MaterialUI/StyledBreadcrumb';

const Navbar = () => (
  <AppBar position="static">
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        components={Link}
        href="/"
        icon={<HomeIcon fontSize="small" />}
        label={<a>Home</a>}
      />
      <StyledBreadcrumb
        components={Link}
        href="/portfolio"
        label={<a>Portfolio</a>}
      />
      <Link href="/About">
        About
      </Link>
      <Link href="/Contact">
        <a>Contact</a>
      </Link>
    </Breadcrumbs>
  </AppBar>
);

export default Navbar;
