import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../ThemeContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SideBar from './Sidebar';

export default function ForgotPassword() {

    const { isDarkMode } = useContext(ThemeContext);
    return (
        <Grid container component="main" sx={{ height: '100vh', backgroundColor: 'white' }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundColor: '#f1f0f5',
                maxHeight: '100vh',
                overflowX: 'scroll',
                padding: 0,
                margin: 0,
                borderRadius: '0px 30px 30px 0px',
            }}>
                <Box>
                    <SideBar />
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={5} sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: '100vh',
                maxHeight: '100vh',
                position: 'fixed',
                right: '0',
                backgroundColor: 'light',
                borderRadius: '20px 0px 0px 20px',
                padding: 0, // ensure no padding
                margin: 0, // ensure no margin
            }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '75%',
                    }}
                >
                    <Button href='/login' variant='text' color={isDarkMode ? 'white' : 'dark'} sx={{ marginRight: 'auto', marginBottom: '20px' }} startIcon={<ArrowBackIosIcon />}>Back</Button>
                    <Typography variant="h5" sx={{ fontWeight: '500' }} gutterBottom>Forgot Password</Typography>
                    <Typography variant="body2" color={isDarkMode ? 'white' : 'grey'}>Enter your registered email address. We'll send you a code to reset password.</Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            href='/enter-otp'
                            color='primary'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.4, fontWeight: 300, borderRadius: '10px', textTransform: 'none' }}
                        >Send OTP</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
}