import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, InputBase} from '@mui/material'
import {useNavigate} from 'react-router-dom';


const validationSchema = yup.object({
    search: yup
        .string('Enter your search query')
        .required('this field can not be empty'),
});

const SearchInputEl = () => {

    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const {search} = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate('/');
        }
        actions.resetForm();
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: validationSchema,
        onSubmit
    });

    return (

        <form onSubmit={handleSubmit} style={{width: '90%'}}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {/* <Search> */}
                <InputBase sx={{bgcolor: 'white', padding: '10px', borderRadius: '0.25rem'}}
                           fullWidth={true}
                           id="search"
                           name="search"
                           label="search"
                           placeholder='ex: developer, front end'
                           value={values.search}
                           onChange={handleChange}
                           error={touched.search && Boolean(errors.search)}
                />

                <Button
                    sx={{
                        bgcolor: "#33485E",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 'bold',
                        borderRadius: '0.25rem',
                        '&:hover': {
                            bgcolor: "#2A3C4E",
                            color: "#7bf1a8",
                        },
                    }}
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Search
                </Button>


            </Box>
            <Box component='span' sx={{color: 'orange'}}>{touched.search && errors.search}</Box>
        </form>

    );
};

export default SearchInputEl;

