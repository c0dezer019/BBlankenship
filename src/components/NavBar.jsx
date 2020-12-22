import React from 'react';
import Link from 'next/link';
import {
  ContactSupportOutlined, FolderSpecialOutlined, HomeOutlined, InfoOutlined,
} from '@material-ui/icons';
import { Breadcrumbs, Container } from '@material-ui/core';
import StyledBreadcrumb from '../../styles/MaterialUI/styledBreadcrumb';
import useStyles from '../../styles/MaterialUI/navIcons';

const NavBar = () => {
  const classes = useStyles();

  return (
    <Container id="appNavigation" position="static" maxWidth="xl">
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          <StyledBreadcrumb
            icon={<HomeOutlined className={classes.icon} />}
            label={<a>Home</a>}
          />
        </Link>
        <Link href="/About" passHref>
          <StyledBreadcrumb
            icon={<InfoOutlined className={classes.icon} />}
            label={<a>About</a>}
          />
        </Link>
        <Link href="/portfolio" passHref>
          <StyledBreadcrumb
            icon={<FolderSpecialOutlined className={classes.icon} />}
            label={<a>Portfolio</a>}
          />
        </Link>
        <Link href="/Contact" passHref>
          <StyledBreadcrumb
            icon={<ContactSupportOutlined className={classes.icon} />}
            label={<a>Contact</a>}
          />
        </Link>
      </Breadcrumbs>
    </Container>
  );
};

export default NavBar;
