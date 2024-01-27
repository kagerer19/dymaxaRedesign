import {Box, Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import DymaxaFooter from '../components/DymaxaFooter.jsx'
import Navbar from '../components/DymaxaHeader.jsx'
import Button from "@mui/material/Button";


const ComingSoon = () => {
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
                <Typography variant="h3" sx={{textAlign: 'center', marginBottom: '0.5em', color: '#2C3D4F'}}>
                    User Dashboard coming soon,<br/> hang tight!
                </Typography>
                <Typography sx={{maxWidth: '30rem', textAlign: 'center'}} className={'text-gray-700'}>
                    Stay tuned for updates!
                </Typography>
                <img src={'/src/assets/comingSoon-img.png'} alt="Delevery bike image"
                     style={{width: '100%', maxWidth: '600px', marginTop: '6em', marginBottom: '3em'}}/>
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

export default ComingSoon