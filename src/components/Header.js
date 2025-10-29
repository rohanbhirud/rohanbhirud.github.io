import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Header({ name, linkedin, github, phone, email }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1100 }}>
      <Toolbar> {/* This Toolbar holds your name and contact info */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="div" sx={{ mt: 2 }}> {/* Added margin top */}
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Software Engineer
          </Typography>
        </Box>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' }
          }}>
          <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mr: { sm: 2 },
              mb: { xs: 1, sm: 0 }
            }}>
            <EmailIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2" sx={{ mr: 2 }}>{email}</Typography>
          </Box>
          <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mb: { xs: 1, sm: 0 }
            }}>
            <PhoneIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2" sx={{ mr: 2 }}>{phone}</Typography>
          </Box>
          <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              ml: { xs: 0, sm: 2 }
            }}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', marginRight: 16 }}>
              <LinkedInIcon />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <GitHubIcon />
            </a>
          </Box>
        </Box>
      </Toolbar>
      <Toolbar component="nav" sx={{ justifyContent: 'flex-start', bgcolor: 'grey.800' }}>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={handleClose}
              autoFocus={false}
              disableAutoFocus
              disableEnforceFocus
              MenuListProps={{
                autoFocusItem: false,
                'aria-labelledby': 'menu-button',
              }}
            >
              {['skills', 'experience', 'education', 'projects', 'awards'].map((item) => (
                <MenuItem
                  key={item}
                  onClick={(event) => {
                    event.preventDefault();
                    const element = document.getElementById(item);
                    if (element) {
                      const headerOffset = 128; // Account for fixed header height
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                    handleClose();
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {['skills', 'experience', 'education', 'projects', 'awards'].map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{ mx: 1 }}
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.getElementById(item);
                  if (element) {
                    const headerOffset = 128; // Account for fixed header height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;