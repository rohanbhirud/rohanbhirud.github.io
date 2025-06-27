import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; // Keep this import
import { Link } from 'react-scroll'; // Import Link from react-scroll
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email'; // Import EmailIcon
import Button from '@mui/material/Button';

function Header({ name, linkedin, github, phone, email }) { // Receive the email prop
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar> {/* This Toolbar holds your name and contact info */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="div" sx={{ mt: 2 }}> {/* Added margin top */}
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Software Engineer
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <EmailIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2" sx={{ mr: 2 }}>{email}</Typography> {/* Display email */}
          </Box>
          <PhoneIcon sx={{ mr: 0.5 }} />
          <Typography variant="body2" sx={{ mr: 2 }}>{phone}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}> {/* Separating links slightly */}
          <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', marginRight: 16 }}>
            <LinkedInIcon />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <GitHubIcon />
          </a>
        </Box>
      </Toolbar>
      <Toolbar component="nav" sx={{ justifyContent: 'flex-start', bgcolor: 'grey.800' }}>
        <Button color="inherit" sx={{ mx: 1 }} component={Link} to="skills" smooth={true} duration={500} offset={-64}>Skills</Button> {/* These are your navigation links */}
        <Button color="inherit" sx={{ mx: 1 }} component={Link} to="experience" smooth={true} duration={500} offset={-64}>Experience</Button>
        <Button color="inherit" sx={{ mx: 1 }} component={Link} to="education" smooth={true} duration={500} offset={-64}>Education</Button>
        <Button color="inherit" sx={{ mx: 1 }} component={Link} to="projects" smooth={true} duration={500} offset={-64}>Projects</Button>
        <Button color="inherit" sx={{ mx: 1 }} component={Link} to="awards" smooth={true} duration={500} offset={-64}>Awards</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;