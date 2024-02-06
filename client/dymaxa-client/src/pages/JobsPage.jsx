import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Pagination, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link, useParams} from "react-router-dom";
import {jobLoadAction} from "../redux/actions/jobActions.js";
import NavRecruit from "../components/Nav-recruit.jsx";
import JobsHero from "../components/JobsHero.jsx";
import DymaxaFooter from "../components/DymaxaFooter.jsx";
import truncateText from "../utilities/truncateJobDes.js";
import LoadingBox from "../components/LoadingBox.jsx";
import LoginOptions from "../components/LoginOptions.jsx";
import {Paid} from "@mui/icons-material";
import DymaxaHeader from "../components/DymaxaHeader.jsx";
import axios from "axios";


const JobsPage = () => {
    const {jobs, pages, loading, id} = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
        window.scrollTo(3, 3);
    }, [page, keyword, cat, location, id]);
    return (
        <>
            <DymaxaHeader/>
            <JobsHero/>
            <Container>
                <Stack
                    sx={{}}
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={{xs: 1, sm: 2, md: 4}}

                ><Box
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
                                        id={id}
                                        sx={{
                                            minWidth: {xs: '100%', sm: '50%', md: '33%', lg: '25%'},
                                            p: 3,
                                            border: '0.5px solid rgba(74,85,104,0.28)',
                                            shadow: 2,
                                            backgroundColor: '#F8F7F2',
                                            color: '#4a5568',
                                            mb: 4,
                                        }}
                                    >
                                        <Typography variant="h6" component="h1" mb={2} fontWeight="bold">
                                            {job.title}
                                        </Typography>
                                        <Typography variant="body1" mb={2}>
                                            {truncateText(job.description, 40)}
                                        </Typography>
                                        <ul style={{listStyleType: 'none'}} className="flex gap-6">
                                            <li>
                                                <Paid/> {job.salary}
                                            </li>
                                            <li>
                                                <strong>
                                                    <LocationOnIcon/>
                                                    {job.location}
                                                </strong>
                                            </li>
                                            <li>
                                                <strong>Employment Type:</strong> {job.employmentType}
                                            </li>
                                        </ul>
                                        <Link
                                            className={'cta-button'}
                                            to={`/JobDescriptionPage/${job._id}`}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                padding: '8px',
                                                fontSize: '0.875rem',
                                                fontWeight: 'bold',
                                                borderRadius: 'lg',
                                                textDecoration: 'none',
                                                marginTop: '1.25rem',
                                                border: '1px solid #4a5568',
                                            }}
                                        >
                                            Read more
                                        </Link>
                                    </Box>
                                ))}
                </Box>

                </Stack>
                <Stack className="mb-6" spacing={4}>
                    <Pagination page={page} count={pages === 0 ? 1 : pages}
                                onChange={(event, value) => setPage(value)}/>
                </Stack>
            </Container>
            <DymaxaFooter/>
        </>
    );
};

export default JobsPage;