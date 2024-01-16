import { Box } from '@mui/material'
import React from 'react'
import DymaxaFooter from '../components/DymaxaFooter.jsx'
import Navbar from '../components/DymaxaHeader.jsx'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>

                <h1>Page not found!</h1>
            </Box>
            <DymaxaFooter />
        </>
    )
}

export default NotFound