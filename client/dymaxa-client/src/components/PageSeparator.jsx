import React from "react";
import {Box} from "@mui/material";

export const PageSeparator = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100px",
            paddingTop: {xs: "2rem",md: "3rem"},
            paddingBottom: {xs: "2rem", md: ""},
            margin: "0 auto"
        }}>
            <img src={"https://res.cloudinary.com/diufjedfn/image/upload/f_auto,q_auto/PageSeparator"} alt={"Four leaf clover"}/>
        </Box>

    )
}

export default PageSeparator;