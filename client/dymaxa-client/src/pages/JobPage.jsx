import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, Container, Pagination, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {jobLoadAction} from "../redux/actions/jobActions.js";
import NavRecruit from "../components/Nav-recruit.jsx";
import NavAupair from "../components/Nav-aupair.jsx";
import JobsHero from "../components/JobsHero.jsx";
import Footer from "../components/Footer.jsx";
import truncateText from "../utilities/truncateJobDes.js";


const JobPage = () => {
    const {jobs, setUniqueLocation, pages, loading} = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);


    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }
    return (
        <>
            <header
                className="px-4 md:px-6 h-16 md:h-20 flex justify-around items-center bg-[#F8F7F2] text-gray-700 border-b-2 border-[#7bf1a8]">
                <div className="flex items-center mb-2 md:mb-0 align-middle">
                    <img className={"header-logo md:mt-0 mt-3"} src={"src/assets/Dymaxa-logo.png"}
                         alt={"Four leaf clover"}/>
                    <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 mb-1 hover:text-gray-300"
                       href="#">
                        <span className="hidden md:inline text-black">Dymaxas Recruiting</span>
                    </a>
                </div>
                <div className="flex gap-5">
                    <NavRecruit/>
                    <NavAupair/>
                </div>
            </header>
            <JobsHero/>
            <Container sx={{marginLeft: '1.7rem'}}>
                <Stack
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={{xs: 1, sm: 2, md: 4}}

                >
                    <Box sx={{flex: 2, p: 2}}>
                        <Card sx={{minWidth: 150, width: 220, mb: 3, mt: 3, p: 2, backgroundColor: '#F8F7F2'}}>
                            <Box sx={{pb: 2}}>
                                <Typography component="h4" sx={{color: '#4a5568', fontWeight: 600}}>
                                    Filter job by category
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            flex: 6,
                            p: 2,
                            minHeight: '150px',
                        }}>
                        {jobs && jobs.map((job, i) => (
                            <div
                                key={i}
                                style={{minWidth: '900px'}}
                                className="p-6 border rounded-lg shadow bg-[#F8F7F2] text-[#4a5568] mb-4"
                            >
                                <h1 className="text-lg font-semibold mb-3">{job.title}</h1>
                                <p>{truncateText(job.description, 30)}</p>

                                <ul className="list-disc mt-3 flex gap-6">
                                    <li><strong>Salary:</strong>&nbsp; {job.salary}</li>
                                    <li className="flex items-center">
                                        <img src="src/assets/icons/location.svg" alt='Location icon'
                                             className="mr-1"/><strong>
                                        <span>{job.location}</span>
                                    </strong>
                                    </li>
                                    <li><strong>Employment Type:</strong>&nbsp; {job.employmentType}</li>
                                </ul>


                                <a href="#"
                                   className="inline-flex items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-5">
                                    Read more
                                </a>
                            </div>
                        ))}
                    </Box>

                </Stack>
            </Container>
            <Footer/>
        </>
    );
};

export default JobPage;