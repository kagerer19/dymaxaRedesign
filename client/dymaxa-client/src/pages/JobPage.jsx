import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, Container, ListItemIcon, MenuList, Pagination, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link, useParams} from "react-router-dom";
import {jobLoadAction} from "../redux/actions/jobActions.js";
import NavRecruit from "../components/Nav-recruit.jsx";
import NavAupair from "../components/Nav-aupair.jsx";
import JobsHero from "../components/JobsHero.jsx";
import DymaxaFooter from "../components/DymaxaFooter.jsx";
import truncateText from "../utilities/truncateJobDes.js";
import LoadingBox from "../components/LoadingBox.jsx";
import SelectComponent from "../components/SelectedComponent.jsx";
import {jobType_LoadAction} from "../redux/actions/jobTypeActions.js";
import MenuItem from "@mui/material/MenuItem";
import LoginOptions from "../components/LoginOptions.jsx";


const JobPage = () => {
    const {jobs, setUniqueLocation, pages, loading} = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);

    useEffect(() => {
        dispatch(jobType_LoadAction());
    }, []);

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
                <div className="flex items-center gap-5">
                    <NavRecruit/>
                    <NavAupair/>
                    <LoginOptions/>
                </div>
            </header>
            <JobsHero/>
            <Container sx={{marginLeft: '3.7rem'}}>
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
                            <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat}/>
                        </Card>
                        {/* jobs by location */}
                        <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, backgroundColor: '#F8F7F1'}}>
                            <Box sx={{ pb: 2 }}>
                                <Typography component="h4" sx={{fontWeight: 600}}>
                                    Filter job by location
                                </Typography>
                                <MenuList>
                                    {
                                        setUniqueLocation && setUniqueLocation.map((location, i) => (
                                            <MenuItem key={i}>
                                                <ListItemIcon>
                                                    <LocationOnIcon />
                                                </ListItemIcon>
                                                <Typography component="h4" sx={{color: 'rgba(0,0,0,0.89)', fontWeight: 600, fontStyle: 'none'}}>
                                                    <Link to={`/search/location/${location}`}>
                                                        {location}
                                                    </Link>
                                                </Typography>
                                            </MenuItem>
                                        ))
                                    }

                                </MenuList>

                            </Box>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            flex: 6,
                            p: 2,
                            minHeight: '150px',
                        }}>
                        {
                            loading ?
                                <LoadingBox /> :
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
                            <div
                                key={i}
                                style={{minWidth: '900px'}}
                                className="p-6 border rounded-lg shadow bg-[#F8F7F2] text-[#4a5568] mb-4"
                            >
                                <h1 className="text-lg font-semibold mb-3">{job.title}</h1>
                                <p>{truncateText(job.description, 40)}</p>

                                <ul className="list-disc mt-3 flex gap-6">
                                    <li><strong>Salary:</strong>&nbsp; {job.salary}</li>
                                    <li><strong><LocationOnIcon />{job.location}</strong>
                                    </li>
                                    <li><strong>Employment Type:</strong>&nbsp; {job.employmentType}</li>
                                </ul>


                                <a href="/JobDescriptionPage"
                                   className="inline-flex items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-5">
                                    Read more
                                </a>
                            </div>
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

export default JobPage;