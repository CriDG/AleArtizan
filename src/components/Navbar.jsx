
import React, { useState } from 'react'
import './Navbar.css'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link, useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  
  const isLogged = !!localStorage.getItem('currentUser')

  const scrollToSection = (id) => {
    setMenuOpen(false)
    if (window.location.pathname !== '/home') {
      navigate('/home')
      setTimeout(() => {
        const section = document.getElementById(id)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    } else {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/home')
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'rgba(255, 255, 255, 0.8)', padding: '0 2rem' }}
      >
        <Toolbar className="navbar-toolbar">
          {/* Logo a sinistra */}
          <div className="navbar-logo">
            <Link to="/home">
              <img
                src="https://res.cloudinary.com/dsatempym/image/upload/v1742030377/logo2_rzqwft.png"
                alt="Logo"
                crossOrigin="anonymous"
              />
            </Link>
          </div>

          {/* Link al centro (solo desktop) */}
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

          <div className="navbar-links right">
            {/* Icona Wishlist (solo desktop, se loggato) */}
            {!isMobile && isLogged && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => navigate('/wishlist')}
                sx={{ ml: 1 }}
                aria-label="Wishlist"
              >
                <FavoriteIcon sx={{ color: '#e6007e', fontSize: 30 }} />
              </IconButton>
            )}

            {/* Icona Logout (solo desktop, se loggato) */}
            {!isMobile && isLogged && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleLogout}
                sx={{ ml: 1 }}
                aria-label="Logout"
              >
                <ExitToAppIcon sx={{ color: '#e6007e', fontSize: 30 }} />
              </IconButton>
            )}

            {/* Icona Accedi/Registrati (solo desktop, se NON loggato) */}
            {!isMobile && !isLogged && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => navigate('/accedi-registrati')}
                sx={{ ml: 2 }}
                aria-label="Accedi/Registrati"
              >
                <AccountCircleIcon sx={{ color: '#e6007e', fontSize: 30 }} />
              </IconButton>
            )}

            {/* Burger Menu */}
            <IconButton edge="end" color="inherit" onClick={() => setMenuOpen(true)}>
              <MenuIcon sx={{ color: '#e6007e', fontSize: 35 }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List
          sx={{
            width: 250,
            background: 'rgba(245, 13, 140, 0.7)',
            height: '100%',
          }}
        >
          {/* Solo su mobile/tablet: link alle sezioni + “Accedi/Registrati” o “Logout” */}
          {isMobile && (
            <>
              {/* Chi siamo */}
              <ListItem>
                <ListItemButton onClick={() => scrollToSection('chi-siamo')}>
                  <ListItemText primary="Chi siamo" sx={listItemStyle} />
                </ListItemButton>
              </ListItem>

              {/* Cosa facciamo */}
              <ListItem>
                <ListItemButton onClick={() => scrollToSection('cosa-facciamo')}>
                  <ListItemText primary="Cosa facciamo" sx={listItemStyle} />
                </ListItemButton>
              </ListItem>

              {/* Contatti */}
              <ListItem>
                <ListItemButton onClick={() => scrollToSection('contatti')}>
                  <ListItemText primary="Contatti" sx={listItemStyle} />
                </ListItemButton>
              </ListItem>

              {/* Accedi/Registrati o Logout */}
              {!isLogged && (
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      navigate('/accedi-registrati')
                      setMenuOpen(false)
                    }}
                  >
                    <ListItemText primary="Accedi/Registrati" sx={listItemStyle} />
                  </ListItemButton>
                </ListItem>
              )}
              {isLogged && (
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      handleLogout()
                      setMenuOpen(false)
                    }}
                  >
                    <ListItemText primary="Logout" sx={listItemStyle} />
                  </ListItemButton>
                </ListItem>
              )}
            </>
          )}

          {/* Sempre presenti (desktop e mobile) */}
          <ListItem>
            <ListItemButton component={Link} to="/diversi" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Mix" sx={listItemStyle} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/famiglia" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Famiglia" sx={listItemStyle} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/feste" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Feste" sx={listItemStyle} />
            </ListItemButton>
          </ListItem>

          {/* Solo mobile: link a Wishlist se loggato */}
          {isMobile && isLogged && (
            <ListItem>
              <ListItemButton component={Link} to="/wishlist" onClick={() => setMenuOpen(false)}>
                <ListItemText primary="Wishlist" sx={listItemStyle} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  )
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
}
