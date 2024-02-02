import {Box, Paper, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { createAJobAction } from '../../redux/actions/jobActions';
import Grid from "@mui/material/Grid";

const validationSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('Title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    requirements: yup
        .array()
        .of(yup.string('Enter a requirement'))
        .required('Requirements are required'),
    behaviouralCompetency: yup
        .array()
        .of(yup.string('Enter Behavioural Competency')),
    duties: yup
        .array()
        .of(yup.string('Enter a duty'))
        .required('Duties are required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location'),
    employmentType: yup
        .string('Enter Employment type')
        .required('Employment type is required')
});



export const CreateJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            requirements: '',
            behaviouralCompetency: '',
            duties: '',
            salary: '',
            location: '',
            employmentType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(createAJobAction(values))
            navigate('/admin/CurrentJobs');
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
                                id="requirements"
                                name="requirements"
                                label="Requirements (separated by commas)"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Enter job requirements"
                                value={formik.values.requirements}
                                onChange={(e) => {
                                    const requirementsArray = e.target.value.split(',');
                                    formik.setFieldValue('requirements', requirementsArray);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.requirements && Boolean(formik.errors.requirements)}
                                helperText={formik.touched.requirements && formik.errors.requirements}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="behaviouralCompetency"
                                name="behaviouralCompetency"
                                label="Behavioural Competencies (separated by commas)"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Enter job Behavioural Competencies"
                                value={formik.values.behaviouralCompetency}
                                onChange={(e) => {
                                    const behaviouralCompetencyArray = e.target.value.split(',');
                                    formik.setFieldValue('behaviouralCompetency', behaviouralCompetencyArray);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.behaviouralCompetency && Boolean(formik.errors.behaviouralCompetency)}
                                helperText={formik.touched.behaviouralCompetency && formik.errors.behaviouralCompetency}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="duties"
                                name="duties"
                                label="Duties (separated by commas)"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Enter Duties"
                                value={formik.values.duties}
                                onChange={(e) => {
                                    const dutiesArray = e.target.value.split(',');
                                    formik.setFieldValue('duties', dutiesArray);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.duties && Boolean(formik.errors.duties)}
                                helperText={formik.touched.duties && formik.errors.duties}
                            />

                            <TextField
                                sx={{ mb: 3 }}
                                fullWidth
                                id="salary"
                                name="salary"
                                label="Salary"
                                type="number"
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
                                id="employmentType"
                                name="employmentType"
                                label="Employment Type"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Employment Type"
                                value={formik.values.employmentType}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.employmentType && Boolean(formik.errors.employmentType)}
                                helperText={formik.touched.employmentType && formik.errors.employmentType}
                            />
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