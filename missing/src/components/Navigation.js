import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import { ThemeContext } from './ThemeContext';
import { Icon} from 'react-materialize'

import { useContext} from 'react'
const pages = ['Home', 'About', 'News'];
function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className='menu'>
    <div className='header'>
      <h1>Home Made Cinema</h1>
    </div>
    <AppBar position="static" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <AdbIcon sx={{ 
              // display: { xs: 'flex', md: 'none' }, 
              mr: 1 }} />
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              // display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/'><Icon left>home</Icon>Home</Link>
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/news'><Icon left>newspaper</Icon>News</Link>
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/about'><Icon left>info</Icon>About us</Link>
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/add'><Icon left>contacts</Icon>Add</Link>
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/contact'><Icon left>contacts</Icon>Contact</Link>
            <Link className='link' style={{ color: theme.color ,paddingRight:'20px',textDecoration:'none'}} to='/user'><Icon left>contacts</Icon>Feedback</Link>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user?.displayName ? (
              <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.email} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" ><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to='/login' style={{ textDecoration: "none" }} >
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Sign in
                </Button>
              </Link>
            )}
            
          
          </Box>
          <button className='switch-mode'  onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
           <p>{!dark ? <Icon>dark_mode</Icon>:<Icon>light_mode</Icon>}</p>
         </button>
        </Toolbar>
        
        
      </Container >
      
    </AppBar >
    </div>
  );
}
export default Navigation;
