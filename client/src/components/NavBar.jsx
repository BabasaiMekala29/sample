
import React,{useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import image from '../images/Dev.jpg';
import { ThemeContext } from '../ThemeContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: `1px solid ${theme.palette.divider}`, // Updated border color
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [employeeName, setEmployeeName] = React.useState("Brookyln Simmons");
  const [category, setCategory] = React.useState("All Employees");
  const [username, setUsername] = React.useState("Robert Allen");
  const [designation, setDesignation] = React.useState("Hr Manager");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
     
     
    >
      <MenuItem onClick={handleMenuClose} >Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ color: 'text.primary', backgroundColor: 'background.default'}}>
        <IconButton
          size="large"
          aria-label="show new notifications"
          sx={{ color: 'text.primary' }}
          
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem sx={{ color: 'text.primary', backgroundColor: 'background.default' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: 'flex', backgroundColor: 'background.default', color: 'text.primary' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Stack direction="column" spacing={0} sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ lineHeight: 1, color: 'text.primary' }}>
                {employeeName}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant="caption" sx={{ lineHeight: 1, color: 'text.border' }}>
                  {category}
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 1, color: 'text.border' }}>
                  &gt;
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 1, color: 'text.border' }}>
                  {employeeName}
                </Typography>
              </Stack>
            </Stack>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ marginLeft: 2, padding: 0.5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Card sx={{ maxHeight: 45, borderRadius: '4px', backgroundColor: 'background.default', color: 'text.primary', marginRight: '12px' }}>
              <IconButton size="large" aria-label="show new notifications" color="inherit">
                <NotificationsNoneIcon />
              </IconButton>
            </Card>
            <Card sx={{ maxHeight: 45, borderRadius: '4px', padding: 0.5, backgroundColor: 'background.default', color: 'text.primary', border: `1.5px solid ${isDarkMode ? '#262626' : '#e0e0e0'}` }}>
              <CardContent sx={{ padding: '0px !important', '&:last-child': { paddingBottom: '0px' } }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar
                    sx={{ width: 40, height: 40, borderRadius: '4px' }}
                    src={image}
                    alt="Avatar"
                  />
                  <Stack direction="column" spacing={0} sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ lineHeight: 1 }}>
                      <b>{username}</b>
                    </Typography>
                    <Typography variant="caption" sx={{ lineHeight: 1, color: 'text.border', marginBottom: 0 }}>
                      {designation}
                    </Typography>
                  </Stack>
                  <IconButton size="small" sx={{ color: 'text.border' }}>
                    <KeyboardArrowDownIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

