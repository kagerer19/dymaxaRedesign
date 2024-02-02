import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useProSidebar } from 'react-pro-sidebar';


const HeaderTop = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#152027', boxShadow: 0 }}>
            <Toolbar>
                    <IconButton onClick={() => collapseSidebar()}
                                size="large"
                                edge="start"
                                color="#34495E"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                    >
                        <MenuIcon sx={{color: '#7BF1A8'}} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <a href='/JobsPage' alt='Dymaxa Heading text' className='text-white'>Dymaxa Recruiting</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderTop;