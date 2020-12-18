import { AppBar, Breadcrumbs } from '@material-ui/core';
import Link from 'next/link'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Breadcrumbs aria-label="breadcrumb">

            </Breadcrumbs>
        </AppBar>
    )
};

export default Navbar;
