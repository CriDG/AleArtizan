import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 🔥 Mobile/Tablet detection

  // 🔹 Funzione per navigare e scrollare alle sezioni della homepage
  const scrollToSection = (id) => {
    setMenuOpen(false); // 🔥 Chiude il menu dopo la navigazione
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
        sx={{ 
          
          background: 'rgba(255, 255, 255, 0.5)', 
          padding: '5px 10px' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* 🔹 Link a sinistra (Solo su Desktop) */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '20px' }}>
              <button
                onClick={() => scrollToSection('chi-siamo')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#e6007e',
                  fontFamily: 'cursive', 
                }}
              >
                Chi siamo
              </button>
              <button
                onClick={() => scrollToSection('cosa-facciamo')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#e6007e',
                  fontFamily: 'cursive', 
                }}
              >
                Cosa facciamo
              </button>

              <button
                onClick={() => scrollToSection('contatti')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#e6007e',
                  fontFamily: 'cursive', 
                }}
              >
                Contatti
              </button>
            </div>
          )}

          {/* 🔹 Logo al centro */}
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            sx={{          
              textDecoration: 'none',
              color: '#e6007e',
              fontWeight: 'bold',
            }}
          >
            <img
              src="https://i.postimg.cc/jj14DD07/logo2.png"
              alt="Logo"
              style={{ height: '110px' }}
            />
          </Typography>

          {/* 🔹 Menu Burger a destra */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon sx={{ color: '#e6007e', fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔹 Menu a tendina (Drawer) */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List
          sx={{
            width: 250,
            background: 'rgba(230, 0, 126, 0.4)',
            height: '100%',
        
          }}
        >
          {/* 🔥 Su mobile, spostiamo "Chi siamo" e "Cosa facciamo" nel menu */}
          {isMobile && (
            <>
              <ListItem button onClick={() => scrollToSection('chi-siamo')}>
                <ListItemText
                  primary="Chi siamo"
                  sx={{
                    color: 'white',
                    fontSize: '20px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background:
                        'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                      transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                      borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                      fontFamily: 'cursive', 
                    },
                  }}
                />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('cosa-facciamo')}>
                <ListItemText
                  primary="Cosa facciamo"
                  sx={{
                    color: 'white',
                    fontSize: '20px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background:
                        'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                      transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                      borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                      fontFamily: 'cursive', 
                    },
                  }}
                />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('contatti')}>
                <ListItemText
                  primary="Contatti"
                  sx={{
                    color: 'white',
                    fontSize: '20px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background:
                        'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                      transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                      borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                      fontFamily: 'cursive', 
                    },
                  }}
                />
              </ListItem>

            </>
          )}

          <ListItem
            button
            component={Link}
            to="/diversi"
            onClick={() => setMenuOpen(false)}
          >
            <ListItemText
              primary="Mix"
              sx={{
                color: 'white',
                fontSize: '20px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background:
                    'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                  transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                  borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                  
                },
                
              }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/famiglia"
            onClick={() => setMenuOpen(false)}
          >
            <ListItemText
              primary="Famiglia"
              sx={{
                color: 'white',
                fontSize: '20px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background:
                    'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                  transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                  borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                  fontFamily: 'cursive', 
                },
              }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/feste"
            onClick={() => setMenuOpen(false)}
          >
            <ListItemText
              primary="Feste"
              sx={{
                color: 'white',
                fontSize: '20px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background:
                    'rgba(255, 255, 255, 0.5)' /* 🔥 Sfondo più chiaro */,
                  transform: 'scale(1.05)' /* 🔥 Leggero ingrandimento */,
                  borderRadius: '5px' /* 🔥 Angoli arrotondati */,
                  fontFamily: 'cursive', 
                },
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
