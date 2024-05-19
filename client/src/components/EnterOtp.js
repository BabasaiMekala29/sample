import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DigitInput from './DigitInput';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Modal from '@mui/material/Modal';
import SparkleImage from '../images/sparkle.png'
import { ThemeContext } from '../ThemeContext';
import SideBar from './Sidebar';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

};
export default function EnterOtp() {

    const [open, setOpen] = React.useState(false);
    const { isDarkMode } = useContext(ThemeContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container component="main" sx={{ height: '100vh', backgroundColor: 'white' }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundColor: '#f1f0f5',
                maxHeight:'100vh',
                overflowX:'scroll',
                padding: 0, 
                margin: 0, 
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
                backgroundColor:'light',
                borderRadius:'20px 0px 0px 20px',
                padding: 0, // ensure no padding
                margin: 0, // ensure no margin
            }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        width: '75%'
                    }}
                >
                    <Button href='/forgotpassword' variant='text' color={isDarkMode?'white':'dark'} sx={{ marginRight: 'auto', marginBottom: '20px' }} startIcon={<ArrowBackIosIcon />}>Back</Button>
                    <Typography variant="h5" sx={{ fontWeight: '500' }} gutterBottom>Enter OTP</Typography>
                    <Typography variant="body2"  color={isDarkMode?'white':'grey'}>Enter the 5-digit code we have shared a code to your registered email address.</Typography>
                    <Box sx={{ mt: 1 } }>
                        <DigitInput length={5} />
                        <Button
                            color='primary'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.4, fontWeight: 300, borderRadius: '10px', textTransform: 'none' }}
                            onClick={handleOpen}
                        >Verify</Button>
                    </Box>
                </Box>

            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={SparkleImage} alt='sparkle' style={{width: '200px',marginBottom:'8px'}} />
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign:'center'}} >
                        Password updated successfully
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ textAlign:'center',mt: 2,mb:2 }} gutterBottom>
                        Your password has been updated successfully
                    </Typography>
                    <Button href='/login' variant='contained' color='primary' sx={{ width:'100%', py: 1.4, fontWeight: 300, borderRadius: '10px', textTransform: 'none' }}>Back to Login</Button>
                </Box>
            </Modal>
        </Grid >
    );
}