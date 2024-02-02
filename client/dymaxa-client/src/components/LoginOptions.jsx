import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from "@mui/material";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userLogoutAction} from "../redux/actions/userActions.js";
import hasAdminCookie from "../utilities/cookieUtils.js";

const LoginOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button onClick={handleClick} disableRipple>
                <Avatar
                    alt="Remy Sharp"
                    src="../src/assets/Dymaxa-logo.png"
                    sx={{width: 36, height: 36}}
                />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Typography sx={{'&:hover': {color: '#7bf1a8'}}} textAlign="center">
                        <Link to="/admin/CurrentJobs">Dashboard</Link>
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default LoginOptions;
