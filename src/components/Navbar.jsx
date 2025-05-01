import { useState } from 'react';
import './Navbar.css';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (window.location.pathname !== '/home') {
      navigate('/home');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'rgba(255, 255, 255, 0.8)', padding: '0 2rem' }}
      >
        <Toolbar className="navbar-toolbar">

          {/* 🔹 Logo a sinistra */}
          <div className="navbar-logo">
            <Link to="/home">
              <img
                src="https://res.cloudinary.com/dsatempym/image/upload/v1742030377/logo2_rzqwft.png"
                alt="Logo"
                crossOrigin="anonymous"
              />
            </Link>
          </div>

          {/* 🔹 Link al centro,quando sul desktop */}
          {!isMobile && (
            <div className="navbar-links left">
              <button onClick={() => scrollToSection('chi-siamo')} className="navbar-button">
                Chi siamo
              </button>
              <button onClick={() => scrollToSection('cosa-facciamo')} className="navbar-button">
                Cosa facciamo
              </button>
              <button onClick={() => scrollToSection('contatti')} className="navbar-button">
                Contatti
              </button>
            </div>
          )}

          {/* 🔹 Burger Menu */}
          <div className="navbar-links right">
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon sx={{ color: '#e6007e', fontSize: 35 }} />
            </IconButton>
          </div>

        </Toolbar>

      </AppBar>

      {/* 🔹 Drawer Menu */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List
          sx={{
            width: 250,
            background: 'rgba(245, 13, 140, 0.7)',
            height: '100%',
          }}
        >
          {/* Solo su mobile/tablet */}
          {isMobile && (
            <>
              <ListItem button onClick={() => scrollToSection('chi-siamo')}>
                <ListItemText primary="Chi siamo" sx={listItemStyle} />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('cosa-facciamo')}>
                <ListItemText primary="Cosa facciamo" sx={listItemStyle} />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('contatti')}>
                <ListItemText primary="Contatti" sx={listItemStyle} />
              </ListItem>
            </>
          )}

          <ListItem button component={Link} to="/diversi" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Mix" sx={listItemStyle} />
          </ListItem>
          <ListItem button component={Link} to="/famiglia" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Famiglia" sx={listItemStyle} />
          </ListItem>
          <ListItem button component={Link} to="/feste" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Feste" sx={listItemStyle} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

const listItemStyle = {
  color: 'white',
  fontSize: '20px',
  transition: 'all 0.3s ease-in-out',
  fontFamily: 'cursive',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    transform: 'scale(1.05)',
    borderRadius: '5px',
  },
};
