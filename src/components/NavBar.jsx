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
        <Link color="#eeeeee" href="/" passHref>
          <StyledBreadcrumb
            icon={<HomeOutlined className={classes.icon} color="#eeeeee" />}
            label={<a>Home</a>}
          />
        </Link>
        <Link color="#eeeeee" href="/About" passHref>
          <StyledBreadcrumb
            icon={<InfoOutlined className={classes.icon} />}
            label={<a>About</a>}
          />
        </Link>
        <Link color="#eeeeee" href="/portfolio" passHref>
          <StyledBreadcrumb
            icon={<FolderSpecialOutlined className={classes.icon} />}
            label={<a>Portfolio</a>}
          />
        </Link>
        <Link color="#eeeeee" href="/Contact" passHref>
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
