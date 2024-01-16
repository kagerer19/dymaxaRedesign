import {Box} from '@mui/material';
import React from 'react';
import HeaderTop from './HeaderTop';
import SideBarAdm from './SidebarAdmin.jsx';

const Layout = (Component) => ({...props}) => {
    return (
        <>
            <div style={{display: 'flex', minHeight: '100vh'}}>
                <SideBarAdm/>
                <Box sx={{width: '100%', bgcolor: '#d7d2d2'}}>
                    <HeaderTop/>
                    <Box sx={{p: 3}}>
                        <Component {...props} />
                    </Box>
                </Box>
            </div>
        </>
    )
};

export default Layout;