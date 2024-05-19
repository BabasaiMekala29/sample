import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LogoImg from '../images/Logo.png';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { isDarkMode } = useContext(ThemeContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundColor: '#f1f0f5',
                maxHeight:'100vh',
                overflowX:'scroll',
                padding: 0,
                borderRadius:'0px 30px 30px 0px',
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
                backgroundColor:'white',
                
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
                    <Box container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <img src={LogoImg} alt='LogoText' className='logo-loginpage' />
                        <Typography variant="h4" component="h2" sx={{ fontWeight: '500', marginLeft: '4px', marginBottom: '12px' }}>HRMS</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: '500' }} gutterBottom>Welcome &#x1F44B;</Typography>
                    <Typography variant="body2" color={isDarkMode ? 'white' : 'grey'}>Please login here</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handlePasswordVisibility}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember Me"
                                />
                            </Grid>
                            <Grid item>
                                <Link to="/forgotpassword" style={{ textDecoration: 'none', fontSize: '14px', color: 'primary' }}>Forgot Password?</Link>
                            </Grid>
                        </Grid>
                        <Button
                            color='primary'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.4, fontWeight: 300, borderRadius: '10px', textTransform: 'none' }}
                        >Login</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
