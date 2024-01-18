import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from "@mui/material";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userLogoutAction} from "../redux/actions/userActions.js";

const LoginOptions = () => {
    //Show // Hide buttons
    const { userInfo } = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginClick = () => {
        handleClose();
    };

    //Logout admin
    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload();
        setTimeout(() => {
            navigate('/');
        }, 500)
    }

    return (
        <div>
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
                        <Link to="/admin/AdminDashboard">Dashboard</Link>
                    </Typography>
                </MenuItem>
                {

                    !userInfo ?

                        <MenuItem onClick={handleLoginClick}>
                            <Typography textAlign="center" sx={{'&:hover': {color: '#7bf1a8'}}}>
                                <Link to="/loginPage">Log In</Link>
                            </Typography>
                        </MenuItem> :
                        <MenuItem onClick={logOutUser}>
                            <Typography sx={{'&:hover': {color: '#7bf1a8'}}} textAlign="center">
                                <Link to="/">Log Out</Link>
                            </Typography>
                        </MenuItem>

                }
            </Menu>
        </div>
    );
};

export default LoginOptions;
