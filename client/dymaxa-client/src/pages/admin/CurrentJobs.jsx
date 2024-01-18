import React, {useEffect, useState} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import truncateText from "../../utilities/truncateJobDes.js";
import {jobLoadAction} from "../../redux/actions/jobActions.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Pagination, Stack} from "@mui/material";
import LoadingBox from "../../components/LoadingBox.jsx";
import {useParams} from "react-router-dom";

const CurrentJobs = () => {
    const {jobs, pages, loading} = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);
    return (
        <>
            <div className="flex gap-3">
                <a href="/JobDescriptionPage"
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
                                <div
                                    key={i}
                                    style={{minWidth: '900px'}}
                                    className="p-6 border rounded-lg shadow bg-[#F8F7F2] text-[#4a5568] mb-4"
                                >
                                    <h1 className="text-lg font-semibold mb-3">{job.title}</h1>
                                    <p>{truncateText(job.description, 40)}</p>

                                    <ul className="list-disc mt-3 flex gap-6">
                                        <li><strong>Salary:</strong>&nbsp; {job.salary}</li>
                                        <li><strong><LocationOnIcon/>{job.location}</strong>
                                        </li>
                                        <li><strong>Employment Type:</strong>&nbsp; {job.employmentType}</li>
                                    </ul>
                                    <div className="flex gap-3">
                                        <a href="/JobDescriptionPage"
                                           className="items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-5">
                                           Update
                                        </a>
                                        <a href="/JobDescriptionPage"
                                           className="items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-5">
                                            Details
                                        </a>
                                        <a href="/JobDescriptionPage"
                                           className="items-center py-2 text-sm font-medium rounded-lg text-[#4a5568] cta-button mt-5">
                                            Delete
                                        </a>
                                    </div>
                                </div>
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