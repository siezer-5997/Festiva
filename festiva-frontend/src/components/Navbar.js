import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Festiva
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Products</Button>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
