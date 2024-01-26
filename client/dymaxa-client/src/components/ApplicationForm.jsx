import React, {useState, useCallback, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DOMPurify from 'dompurify';
import {toast} from 'react-toastify';
import {sendFormDataToServer} from "../utilities/emailApi.js";
import {loadSingleJobAction} from "../redux/actions/jobActions.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

const ApplicationForm = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();
    const {singleJob} = useSelector(state => state.singleJob)
    const navigate = useNavigate();

    //Handle Privacy Policy
    const openPrivacyPolicy = () => {
        setPrivacyPolicyOpen(true);
    };
    const closePrivacyPolicy = () => {
        setPrivacyPolicyOpen(false);
    };
    const acceptPrivacyPolicy = () => {
        setPrivacyPolicyAccepted(true);
    };


    //Store files from DropZone
    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    }, [selectedFiles]);


    // Fetch jobId for email submission
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(loadSingleJobAction(id));
        };

        fetchData();
    }, [id, dispatch]);


    //Handle Submission of form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!singleJob) {
            console.error('Error: singleJob is undefined');
            return;
        }

        if (!privacyPolicyAccepted) {
            toast.error("Please accept the privacy policy before submitting the application.");
            return;
        }



        //Gather form data for email API
        const formData = {
            firstName: DOMPurify(event.target.firstName.value),
            lastName: DOMPurify(event.target.lastName.value),
            email: DOMPurify(event.target.email.value),
            contactNumber: DOMPurify(event.target.contactNumber.value),
            url: DOMPurify(event.target.url.value),
            introText: DOMPurify(event.target.introText.value),
            jobId: singleJob._id
        };

        try {
            //Send data to backend
            await sendFormDataToServer(formData, selectedFiles);
            toast.success('Application successful');
            navigate('/JobsPage');
        } catch (error) {
            console.error('Error sending data to server:', error);
            toast.error('An error occurred with your application');
        }

        setSelectedFiles([]);
    };

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
            <Box sx={{p: 2}}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '36rem',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{marginBottom: 6}} color={'#33485E'} variant="h4">
                        Apply For This Job
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="family-name"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    required
                                    fullWidth
                                    type="email"
                                    id="email"
                                    label="Email Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="contactNumber"
                                    type="number"
                                    id="contact"
                                    label="Contact Number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="url"
                                    type="url"  // Use 'url' as the type for a URL input
                                    id="url"
                                    label="LinkedIn Profile URL"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="introText" type="text" id="introText"
                                           label="Anything else we should know, availability, etc.?" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <div {...getRootProps()} className={'dropzoneStyles'}>
                                    <input {...getInputProps()} />
                                    {selectedFiles.length > 0 ? (
                                        <UploadFileRoundedIcon style={{fontSize: 48, color: '#7bf1a8'}}/>
                                    ) : (
                                        <UploadFileIcon style={{fontSize: 48, color: '#33485E'}}/>
                                    )}
                                    {selectedFiles.length > 0 ? (
                                        <ul>
                                            {selectedFiles.map((file, index) => (
                                                <li key={index}>
                                                    <span>{file.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <Typography variant="body1">
                                            Drag 'n' drop some files here, or click to select files
                                        </Typography>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                        <Button sx={{alignSelf: "center"}} onClick={openPrivacyPolicy}>
                            * Please Read and accept the privacy policy to apply
                        </Button>
                        <PrivacyPolicy isOpen={privacyPolicyOpen} onAccept={acceptPrivacyPolicy}
                                       onClose={closePrivacyPolicy}/>

                        <div style={{width: '100%', textAlign: 'center'}}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: '20rem',
                                    margin: '0 auto',
                                    mt: 3,
                                    mb: 2,
                                    backgroundColor: '#33485E',
                                    '&:hover': {
                                        backgroundColor: 'rgba(51, 72, 94, 0.91)',
                                        color: '#7bf1a8',
                                    },
                                }}
                            >
                                Apply
                            </Button>
                        </div>
                    </form>
                </Box>
            </Box>
    );
};


export default ApplicationForm;
