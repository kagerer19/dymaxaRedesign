import React, {useEffect, useState} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {deleteSingleJobAction, jobLoadAction} from "../../redux/actions/jobActions.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Pagination, Stack} from "@mui/material";
import LoadingBox from "../../components/LoadingBox.jsx";
import LabelIcon from '@mui/icons-material/LocationOn';
import {Link, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import {Label} from "@mui/icons-material";

const CurrentJobs = () => {
    const {jobs, pages, loading} = useSelector(state => state.loadJobs);
    const {success: deleteSuccess} = useSelector(state => state.deleteJob);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);

    const deleteJobById = (e, id) => {
        e.preventDefault();
        if (window.confirm(`You really want to delete job ID: "${id}" ?`)) {
            dispatch(deleteSingleJobAction(id));
            window.location.reload();
        }
    }
    return (
        <>
            <div className="flex gap-3">
                <a href="/CreateJob"
                   className="items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-2 mb-2">
                    Create New Job
                </a>
            </div>
            <Container
                sx={{
                    flex: 6,
                    p: 2,
                    minHeight: '150px',
                }}>
                {
                    loading ?
                        <LoadingBox/> :
                        jobs && jobs.length === 0 ?
                            <>
                                <Box
                                    sx={{
                                        minHeight: '350px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                    <h2>No result found!</h2>
                                </Box>
                            </> :
                            jobs && jobs.map((job, i) => (
                                <Box
                                    className={'border rounded-lg shadow bg-[#F8F7F2] text-[#4a5568]'}
                                    key={i}
                                    sx={{
                                        minWidth: { xs: '100%', sm: '50%', md: '33%', lg: '25%' },
                                        p: 3,
                                        border: '0.5px solid rgba(74,85,104,0.28)',
                                        shadow: 2,
                                        backgroundColor: '#F8F7F2',
                                        color: '#4a5568',
                                        mb: 4,
                                    }}
                                >
                                    <h1 className="text-lg font-semibold mb-3">{job.title}</h1>

                                    <ul className="list-disc mt-3 flex gap-6">
                                        <li><strong><LocationOnIcon/>{job.location}</strong>
                                        </li>
                                        <li><strong>Employment Type:</strong>&nbsp; {job.employmentType}</li>
                                        <li><strong><Label/></strong>&nbsp;ID: {job._id}</li>
                                    </ul>
                                    <div className="flex gap-3 mt-3">
                                        <Link to={`/UpdateJob/${job._id}`}>
                                            <Button
                                                className="items-center py-2 text-sm font-medium rounded-lg text-white cta-button mt-2 mb-2"
                                                sx={{
                                                    color: '#ffffff',
                                                    backgroundColor: '#4a5568',
                                                    '&:hover': {
                                                        backgroundColor: '#334155',
                                                    },
                                                    marginRight: '8px',
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button
                                            onClick={(e) => deleteJobById(e, job._id)}
                                            sx={{
                                                backgroundColor: '#EF4444',
                                                color: '#FFFFFF',
                                                '&:hover': {
                                                    backgroundColor: '#D02828',
                                                },
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Box>
                            ))}
                <Stack className="mb-6" spacing={4}>
                    <Pagination page={page} count={pages === 0 ? 1 : pages}
                                onChange={(event, value) => setPage(value)}/>
                </Stack>
            </Container>
        </>
    );
};

export default CurrentJobs;