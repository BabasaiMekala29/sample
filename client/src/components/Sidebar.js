import '../App.css';
import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import LogoImg from '../images/Logo.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../ThemeContext';
import { DashboardIcon, AllEmployeesIcon, AllDepartmentsIcon, AttendenceIcon, PayrollIcon, JobsIcon, CandidatesIcon, LeavesIcon, HolidaysIcon, SettingsIcon } from '../icons/IconComps';
import { Typography } from '@mui/material';
const drawerWidth = 240;
const IconsArr = [DashboardIcon, AllEmployeesIcon, AllDepartmentsIcon, AttendenceIcon, PayrollIcon, JobsIcon, CandidatesIcon, LeavesIcon, HolidaysIcon, SettingsIcon]
const sideBarSections = ['Dashboard', 'All Employees', 'All Departments', 'Attendence', 'Payroll', 'Jobs', 'Candidates', 'Leaves', 'Holidays', 'Settings'];

//As this component is 'fixed' in position with a width of 240px, any other page in which u are using this component should have a margin-left of 250px
export default function SideBar() {
    const [selectedListItem, setSelectedListItem] = useState(0);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleClickNavItem = (index) => {
        setSelectedListItem(index);
    };

    const handleClickMode = (mode) => {
        toggleTheme(mode);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'backgroundd.appBar',
                        marginLeft: '6px',
                        paddingTop: '18px',
                        paddingX: '12px',
                        borderRadius: '12px'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box container sx={{display:'flex', alignItems:'center',justifyContent:'flex-start'}}>
                    <img src={LogoImg} alt='LogoText' className='sideNavLogo' />
                    <Typography variant="h4" component="h2" sx={{fontWeight:'500',marginLeft:'4px',marginBottom:'5px'}}>HRMS</Typography>
                </Box>
                <List>
                    {IconsArr.map((IconComp, index) => (
                        <ListItem key={sideBarSections[index]} disablePadding>
                            <ListItemButton
                                selected={selectedListItem === index}
                                onClick={() => handleClickNavItem(index)}
                                sx={{
                                    borderRadius: '0px 8px 8px 0px',
                                    borderWidth: '0px 0px 0px 2px',
                                    borderStyle: 'solid',
                                    borderColor: selectedListItem === index ? '#7152F3' : 'transparent',
                                    backgroundColor: selectedListItem === index ? 'lightblue' : 'transparent',
                                    color: selectedListItem === index ? '#7152F3' : 'dark',
                                    '&:hover': { backgroundColor: isDarkMode ? 'rgba(113, 82, 243, 0.05)' : 'lightgray' },
                                }}
                            >
                                <ListItemIcon>
                                    {
                                        <IconComp isSelected={selectedListItem === index} isDark={isDarkMode} />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={sideBarSections[index]} sx={{ marginLeft: '0px' }} />

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    sx={{ position: 'fixed', bottom: '24px' }}
                >
                    <Button
                        startIcon={<LightModeIcon />}
                        color={!isDarkMode ? 'primary' : 'dark'}
                        onClick={() => handleClickMode('light')}
                        sx={{ fontWeight: 300, textTransform: 'none' }}
                    >
                        Light
                    </Button>
                    <Button
                        startIcon={<DarkModeIcon />}
                        color={isDarkMode ? 'primary' : 'light'}
                        sx={{ fontWeight: 300, textTransform: 'none' }}
                        onClick={() => handleClickMode('dark')}
                    >
                        Dark
                    </Button>
                </ButtonGroup>
            </Drawer>
        </Box>
    );
}
