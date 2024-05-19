import '../App.css';
import React, { useState } from 'react';
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
import LogoText from '../images/LogoText.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DashboardIcon, AllEmployeesIcon, AllDepartmentsIcon, AttendenceIcon, PayrollIcon, JobsIcon, CandidatesIcon, LeavesIcon, HolidaysIcon, SettingsIcon } from '../icons/IconComponents';

const drawerWidth = 240;
const IconsArr = [DashboardIcon, AllEmployeesIcon,AllDepartmentsIcon, AttendenceIcon, PayrollIcon, JobsIcon, CandidatesIcon, LeavesIcon, HolidaysIcon, SettingsIcon]
const sideBarSections = ['Dashboard', 'All Employees', 'All Departments', 'Attendence', 'Payroll', 'Jobs', 'Candidates', 'Leaves', 'Holidays', 'Settings'];

//As this component is 'fixed' in position with a width of 240px, any other page in which u are using this component should have a margin-left of 250px
export default function SideBar() {
    const [selectedListItem, setSelectedListItem] = useState(0); // Initial selected listitem index
    const [selectedMode, setSelectedMode] = useState('light'); // Initial selected mode

    const handleClickNavItem = (index) => {
        setSelectedListItem(index);
    };


    const handleClickMode = (mode) => {
        setSelectedMode(mode);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >

            </AppBar> */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#f1f0f5',
                        marginLeft: '6px',
                        paddingTop: '18px',
                        paddingX: '12px',
                        borderRadius: '12px'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <img src={LogoText} alt='LogoText' className='sideNavLogo' />
                <List>
                    {IconsArr.map((IconComp, index) => (
                       
                        <ListItem key={sideBarSections[index]} disablePadding>
                            {/* <Link */}
                            <ListItemButton selected={selectedListItem === index}
                                onClick={() => handleClickNavItem(index)}
                                sx={{
                                    borderRadius: '0px 8px 8px 0px',
                                    borderWidth: '0px 0px 0px 2px',
                                    borderStyle: 'solid',
                                    borderColor: selectedListItem === index ? '#7152F3' : 'transparent',
                                    backgroundColor: selectedListItem === index ? 'lightblue' : 'transparent',
                                    color: selectedListItem === index ? '#7152F3' : 'dark',
                                    '&:hover': { backgroundColor: 'lightgray' },
                                }}>
                                <ListItemIcon>
                                    {
                                        <IconComp incolor={selectedListItem === index ? '#7152F3' : 'transparent'} strokecolor={selectedListItem === index ? '#D9E1E1' : '#28303F'} />
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
                    sx={{ position: 'fixed', bottom: '24px', fontWeight: '300' }}
                >
                    <Button
                        startIcon={<LightModeIcon />}
                        color={selectedMode === 'light' ? 'primary' : 'light'}
                        onClick={() => handleClickMode('light')}>
                        Light
                    </Button>
                    <Button
                        startIcon={<DarkModeIcon />}
                        color={selectedMode === 'dark' ? 'primary' : 'light'}
                        onClick={() => handleClickMode('dark')}>
                        Dark
                    </Button>
                </ButtonGroup>
            </Drawer>

        </Box>
    );
}
