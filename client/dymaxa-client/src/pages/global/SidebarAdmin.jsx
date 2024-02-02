import React from 'react'
import {Sidebar, Menu, MenuItem, menuClasses} from 'react-pro-sidebar';
import {Box} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {userLogoutAction} from "../../redux/actions/userActions.js";
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


const SidebarAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //log out
    const logOut = async () => {
        await dispatch(userLogoutAction());
        navigate('/JobsPage');
    };



    return (
        <>
            <Sidebar backgroundColor="#142027"
                     style={{borderRightStyle: "none"}}
            >
                <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%"}}>
                    <Box>
                        <Box sx={{
                            pt: 3, pb: 5, display: "flex", justifyContent: "center"
                        }}>
                            <Avatar alt="logo dashboard" src={'../../src/assets/Dymaxa-logo.png'}/>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                            </Box>
                        </Box>

                        <Menu

                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: "#142027",
                                        color: "#7BF1A8",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        // color: "blue",
                                        color: '#7BF1A8',
                                    }
                                },
                            }}

                        >

                            <>
                                <MenuItem component={<Link to="../admin/CurrentJobs"/>} icon={<WorkIcon/>}>Manage
                                    Jobs </MenuItem>
                            </>

                        </Menu>
                    </Box>
                    <Box sx={{pb: 2}}>
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },

                                    '&:hover': {
                                        backgroundColor: "rgb(42,54,63)",
                                        color: "#fafafa",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: '#7BF1A8',
                                    }
                                },
                            }}
                        >
                            <MenuItem onClick={logOut} icon={<LogoutIcon/>}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Sidebar>
        </>
    )
}

export default SidebarAdmin;