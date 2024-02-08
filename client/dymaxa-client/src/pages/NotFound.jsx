import {Box, Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import DymaxaFooter from '../components/DymaxaFooter.jsx'
import Navbar from '../components/DymaxaHeader.jsx'
import Button from "@mui/material/Button";

const NotFound = () => {
    return (
        <>
            <Navbar/>
            <Box
                sx={{
                    height: '81vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <img src={'https://res.cloudinary.com/diufjedfn/image/upload/v1707431939/NOT_FOUND.png'} alt="Not Found"
                     style={{width: '100%', maxWidth: '300px', marginBottom: '2em'}}/>
                <Typography variant="h4" margin={1} sx={{maxWidth: '300px', textAlign: 'center'}}>
                    Page not found!
                </Typography>
                <Typography sx={{maxWidth: '30rem', textAlign: 'center'}}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily
                    unavailable.
                </Typography>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '9em',
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#2C3D4F',
                            '&:hover': {
                                backgroundColor: 'rgba(44,61,79,0.87)',
                                color: '#7BF1A8',
                            },
                        }}
                    >
                        Home
                    </Button>
                </Link>
            </Box>
            <DymaxaFooter/>
        </>
    )
}

export default NotFound