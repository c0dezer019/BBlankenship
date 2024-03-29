import React from 'react';
import Link from 'next/link';
import {
  ContactSupportOutlined, FolderSpecialOutlined, HomeOutlined, InfoOutlined,
} from '@material-ui/icons';
import { Breadcrumbs, Container } from '@material-ui/core';
import StyledBreadcrumb from '../styles/material_ui/StyledBreadcrumb';
import muiStyles from '../styles/material_ui/muiStyles';

const NavBar = () => {
  const classes = muiStyles();

  return (
    <Container id="appNavigation" position="static" maxWidth="xl">
      <Breadcrumbs aria-label="breadcrumb" separator="|">
        <Link color="inherit" href="/" passHref>
          <StyledBreadcrumb
            icon={<HomeOutlined className={classes.icon} />}
            label={<a className="navLink">Home</a>}
          />
        </Link>
        <Link color="inherit" href="/about" passHref>
          <StyledBreadcrumb
            icon={<InfoOutlined className={classes.icon} />}
            label={<a className="navLink">About</a>}
          />
        </Link>
        <Link color="inherit" href="/portfolio" passHref>
          <StyledBreadcrumb
            icon={<FolderSpecialOutlined className={classes.icon} />}
            label={<a className="navLink">Projects</a>}
          />
        </Link>
        <Link color="inherit" href="/contact" passHref>
          <StyledBreadcrumb
            icon={<ContactSupportOutlined className={classes.icon} />}
            label={<a className="navLink">Contact</a>}
          />
        </Link>
      </Breadcrumbs>
    </Container>
  );
};

export default NavBar;
