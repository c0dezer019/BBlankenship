import React from 'react';
import Link from 'next/link';
import {
  ContactSupportOutlined, FolderSpecialOutlined, HomeOutlined, InfoOutlined,
} from '@material-ui/icons';
import { Breadcrumbs, Container } from '@material-ui/core';
import StyledBreadcrumb from '../../styles/MaterialUI/StyledBreadcrumb';

const NavBar = () => (
  <Container id="appNavigation" position="static">
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" passHref>
        <StyledBreadcrumb
          icon={<HomeOutlined fontSize="medium" />}
          label={<a>Home</a>}
        />
      </Link>
      <Link href="/About" passHref>
        <StyledBreadcrumb
          icon={<InfoOutlined fontSize="medium" />}
          label={<a>About</a>}
        />
      </Link>
      <Link href="/portfolio" passHref>
        <StyledBreadcrumb
          icon={<FolderSpecialOutlined fontSize="medium" />}
          label={<a>Portfolio</a>}
        />
      </Link>
      <Link href="/Contact" passHref>
        <StyledBreadcrumb
          icon={<ContactSupportOutlined fontSize="medium" />}
          label={<a>Contact</a>}
        />
      </Link>
    </Breadcrumbs>
  </Container>
);

export default NavBar;
