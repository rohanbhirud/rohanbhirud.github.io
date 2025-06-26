import React from 'react';
import { Container, Typography } from '@mui/material'; // No changes needed for Material UI imports

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          Rohan Bhirud
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;