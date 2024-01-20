import {Box, MenuItem, Paper, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { jobType_LoadAction } from '../../redux/actions/jobTypeActions';
import { registerAjobAction } from '../../redux/actions/jobActions';
import Grid from "@mui/material/Grid";


const validationSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    jobType: yup
        .string('Enter a Category')
        .required('Category is required'),
});


export const CreateJob = () => {
    const dispatch = useDispatch();

    //job type
    useEffect(() => {
        dispatch(jobType_LoadAction());
    }, []);

    const { jobType } = useSelector(state => state.jobTypeAll);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAjobAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });



    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid
                    item
                    sx={{ backgroundColor: '#f5f1ea' }}
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 10,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Create a Job
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            className="form_style border-style"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                        >
                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="salary"
                                name="salary"
                                label="Salary"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Salary"
                                value={formik.values.salary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.salary && Boolean(formik.errors.salary)}
                                helperText={formik.touched.salary && formik.errors.salary}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="location"
                                name="location"
                                label="Location"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.location && Boolean(formik.errors.location)}
                                helperText={formik.touched.location && formik.errors.location}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                className="px-2 my-2"
                                variant="outlined"
                                name="jobType"
                                id="jobType"
                                select
                                label="Category"
                                value={formik.values.jobType}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                                helperText={formik.touched.jobType && formik.errors.jobType}
                            >
                                <MenuItem key={''} value={''}>
                                    None
                                </MenuItem>
                                {jobType &&
                                    jobType.map((cat) => (
                                        <MenuItem key={cat._id} value={cat._id}>
                                            {cat.jobTypeName}
                                        </MenuItem>
                                    ))}
                            </TextField>

                            <Button fullWidth variant="contained" type="submit" sx={{backgroundColor: '#33485E','&:hover': {
                                    backgroundColor: 'rgba(51, 72, 94, 0.91)',
                                    color: '#7bf1a8',
                                }}}>
                                Create job
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default CreateJob;