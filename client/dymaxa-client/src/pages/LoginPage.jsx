import {Avatar, Box, Checkbox, Container, FormControlLabel, Grid, Paper} from '@mui/material'
import React, {useEffect} from 'react'
import DymaxaHeader from "../components/DymaxaHeader.jsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux'
import {userSignInAction} from '../redux/actions/userActions.js'
import {Link, useNavigate} from 'react-router-dom'
import AdminLogin from "../components/LoginOptions.jsx";
import DymaxaFooter from "../components/DymaxaFooter.jsx";
import {border, ThemeProvider} from "@mui/system";
import Typography from "@mui/material/Typography";
import {Copyright} from "@mui/icons-material";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(7, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.signIn);
    useEffect(() => {
        if (isAuthenticated) {
            navigate('../admin/AdminDashboard');
        }
    }, [isAuthenticated])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignInAction(values));
            actions.resetForm();
        }

    })

    return (
        <>
            <Grid container component="main" sx={{height: '82vh'}}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(../src/assets/imgSignin.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    sx={{backgroundColor: '#f5f1ea'}}
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 15,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            src="../src/assets/profileImg.JPEG"
                            sx={{m: 1, bgcolor: 'secondary.main'}}
                        />
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{mt: 2}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    backgroundColor: '#2C3D4F',
                                    '&:hover': {
                                        backgroundColor: 'rgba(44,61,79,0.87)',
                                        color: '#7BF1A8',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <DymaxaFooter/>
        </>
    )
}

export default LogIn