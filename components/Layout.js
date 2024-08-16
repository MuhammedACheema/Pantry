import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Pantry Tracker</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      {children}
    </Container>
  </>
);

export default Layout;
