
import { Card, Avatar, Typography, Button, Stack, IconButton, CardContent, Divider, Box, CardHeader, Grid } from '@mui/material';
import React from 'react';
import { MailOutlined as MailOutlinedIcon, BusinessCenterOutlined as BusinessCenterOutlinedIcon, DriveFileRenameOutlineOutlined as DriveFileRenameOutlineOutlinedIcon, ReceiptLong as ReceiptLongIcon, EventAvailable as EventAvailableIcon, Person as PersonIcon, AssignmentOutlined as AssignmentOutlinedIcon, LockOutlined as LockOutlinedIcon, PersonOutlineOutlined as PersonOutlineOutlinedIcon, DescriptionOutlined as DescriptionOutlinedIcon, VisibilityOutlined as VisibilityOutlinedIcon, FileDownloadOutlined as FileDownloadOutlinedIcon } from '@mui/icons-material';
import image from '../images/Dev.jpg';
import NavBar from './NavBar';
import SideBar from './Sidebar';

const sections = [
    { id: 1, name: 'Personal information', icon: <PersonOutlineOutlinedIcon /> },
    { id: 2, name: 'Professional information', icon: <BusinessCenterOutlinedIcon /> },
    { id: 3, name: 'Documents', icon: <DescriptionOutlinedIcon /> },
    { id: 4, name: 'Account access', icon: <LockOutlinedIcon /> },
];

const documents = [
    { id: 1, name: 'Document 1' },
    { id: 2, name: 'Document 2' },
    { id: 3, name: 'Document 3' },
    { id: 4, name: 'Document 4' },
    { id: 5, name: 'Document 5' },
    { id: 6, name: 'Document 6' },
];

export default function EmployeeDetails() {
    const [employeeName] = React.useState("Brookyln Simmons");
    const [category] = React.useState("All Employees");
    const [employeeDesignation] = React.useState("Product manager");
    const [employeeMail] = React.useState("abcd.example.com");
    const [selectedSection, setSelectedSection] = React.useState(sections[0].id);

    const handleSectionClick = (id) => {
        setSelectedSection(id);
    };

    return (
        <>
            <SideBar />
            <Box sx={{ backgroundColor: 'background.default', color: 'text.primary',marginLeft:'250px',width: `calc(100% - ${250}px)` }}>
                <NavBar />
                <Card sx={{ height: '60vh',  margin: 'auto', borderRadius: '8px', padding: 0.5, marginTop: 3, border: 1, borderColor: 'text.secondary', backgroundColor: 'background.default' }}>
                    <Card sx={{ width: '99%', margin: 'auto', backgroundColor: 'background.default', color: 'text.primary', border: 1, borderColor: 'text.secondary' }}>
                        <CardContent sx={{ padding: '0px !important', '&:last-child': { paddingBottom: '0px' } }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Avatar sx={{ width: 80, height: 80, borderRadius: '4px' }} src={image} alt="Avatar" />
                                <Stack direction="column" spacing={0.5} sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                        <b>{employeeName}</b>
                                    </Typography>
                                    <Stack direction="row" spacing={0} alignItems="center">
                                        <BusinessCenterOutlinedIcon fontSize='small' />
                                        <Typography variant="caption" sx={{ lineHeight: 1, marginLeft: '6px' }}>
                                            {employeeDesignation}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0} alignItems="center">
                                        <MailOutlinedIcon fontSize='small' />
                                        <Typography variant="caption" sx={{ lineHeight: 1, marginLeft: '6px' }}>
                                            {employeeMail}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <IconButton size="small">
                                    <Card sx={{ backgroundColor: 'primary.main', color: 'text.primary', padding: 0.5 }}>
                                        <Stack direction={'row'} spacing={1}>
                                            <DriveFileRenameOutlineOutlinedIcon fontSize='small' />
                                            <Typography variant='caption'>Edit Profile</Typography>
                                        </Stack>
                                    </Card>
                                </IconButton>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Divider />
                    <Stack direction={'row'}>
                        <Card sx={{ height: '200px', width: '250px', borderRadius: '8px', marginTop: '12px', marginLeft: '6px', backgroundColor: 'background.default', color: 'text.primary', border: 1, borderColor: 'text.secondary' }}>
                            <CardHeader sx={{ backgroundColor: 'primary.main', color: 'text.primary' }}
                                title={<Typography variant="h6">Profile</Typography>}
                                avatar={<PersonIcon />}
                            />
                            <CardContent sx={{ color: 'text.primary', marginTop: 0 }}>
                                <Stack alignItems={'start'} marginLeft={0}>
                                    <Button sx={{ color: 'text.primary' }} startIcon={<EventAvailableIcon />}>
                                        Attendance
                                    </Button>
                                    <Button sx={{ color: 'text.primary' }} startIcon={<ReceiptLongIcon />}>
                                        Projects
                                    </Button>
                                    <Button sx={{ color: 'text.primary' }} startIcon={<AssignmentOutlinedIcon />}>
                                        Leave
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Box sx={{ width: '100%', alignItems: 'center', marginLeft: '20px', marginTop: '12px' }}>
                            <Grid container spacing={2} alignItems="center">
                                {sections.map((section) => (
                                    <Grid item key={section.id} xs={6} sm={3} md={3} lg={3} onClick={() => handleSectionClick(section.id)}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                cursor: 'pointer',
                                                borderBottom: selectedSection === section.id ? '2px solid' : 'none',
                                                borderBottomColor: selectedSection === section.id ? 'primary.main' : 'none',
                                                color: selectedSection === section.id ? 'primary.main' : 'text.primary'
                                            }}
                                        >
                                            {section.icon}
                                            {section.name}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            {selectedSection === 3 && (
                                <Box sx={{ maxHeight: '200px', overflowY: 'auto', mt: 2, pr: 1 }}>
                                    <Grid container spacing={2}>
                                        {documents.map((document) => (
                                            <Grid item key={document.id} xs={12} sm={6}>
                                                <Card sx={{ border: 1, borderColor: 'text.secondary', height: 'auto', width: '100%', borderRadius: '8px', backgroundColor: 'background.default', color: 'text.primary' }}>
                                                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                                                        <Typography variant="subtitle1">{document.name}</Typography>
                                                        <Stack direction="row" spacing={1}>
                                                            <IconButton aria-label="view">
                                                                <VisibilityOutlinedIcon style={{ color: 'text.primary' }} />
                                                            </IconButton>
                                                            <IconButton aria-label="download">
                                                                <FileDownloadOutlinedIcon style={{ color: 'text.primary' }} />
                                                            </IconButton>
                                                        </Stack>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}
                        </Box>
                    </Stack>
                </Card>
            </Box>
        </>
    );
}
