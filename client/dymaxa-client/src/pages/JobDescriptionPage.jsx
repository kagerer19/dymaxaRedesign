import React, {useEffect} from 'react';
import DymaxaHeader from '../components/DymaxaHeader.jsx';
import DymaxaFooter from '../components/DymaxaFooter.jsx';
import {Box, Container} from '@mui/material';
import LoadingBox from '../components/LoadingBox.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {loadSingleJobAction} from '../redux/actions/jobActions.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApplicationForm from '../components/ApplicationForm.jsx';
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import {Paid} from "@mui/icons-material";


const JobDescriptionPage = () => {
    const dispatch = useDispatch();
    const {singleJob, loading} = useSelector(state => state.singleJob)
    const {id} = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadSingleJobAction(id));
    }, [id]);

    return (
        <>
            <DymaxaHeader/>
            <div className="flex flex-col items-center">
                <Container
                    className="w-full md:w-[50%] p-2 min-h-10em max-w-2xl mb-4"
                >
                    {loading ? (
                        <LoadingBox/>
                    ) : singleJob && singleJob.title ? (
                        <div
                            style={{minWidth: '20.25vh', minHeight: '75vh'}}
                            className="p-6 border rounded-lg shadow bg-[#F8F7F2] text-[#4a5568] mb-4"
                        >
                            <h1 className="text-lg font-semibold mb-3 text-center">{singleJob && singleJob.title}</h1>
                            <p className={'main-job-content text-center'}>{singleJob && singleJob.description}</p>


                            {/* Render Requirements */}
                            <div className="requirements">
                                {singleJob &&
                                    singleJob.requirements &&
                                    singleJob.requirements.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold mb-2">Requirements:</h3>
                                            <ul className="custom-list-style mb-7">
                                                {singleJob.requirements.map((requirement, index) => (
                                                    <li key={index}>
                                                        {/* Apply custom list style */}
                                                        <span className="custom-bullet">&#8226;</span> {requirement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                            <div className="duties">
                                {singleJob &&
                                    singleJob.duties &&
                                    singleJob.duties.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold mb-2">Duties:</h3>
                                            <ul className="custom-list-style mb-7">
                                                {singleJob.duties.map((duty, index) => (
                                                    <li key={index}>
                                                        {/* Apply custom list style */}
                                                        <span className="custom-bullet">&#8226;</span> {duty}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                            {/* Render Behavioral requirements */}
                            <div className="requirements">
                                {singleJob &&
                                    singleJob.behaviouralCompetency &&
                                    singleJob.behaviouralCompetency.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold mb-2">Behavioural Competencies:</h3>
                                            <ul className="custom-list-style mb-7">
                                                {singleJob.behaviouralCompetency.map((behaviouralCompetency, index) => (
                                                    <li key={index}>
                                                        {/* Apply custom list style */}
                                                        <span
                                                            className="custom-bullet">&#8226;</span> {behaviouralCompetency}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                            </div>

                            <ul className="list-disc mt-3 flex gap-6 list-none">
                                <li>
                                    <Paid/><br />  {singleJob && singleJob.salary}
                                </li>
                                <li>
                                    <strong>
                                        <LocationOnIcon/><br />
                                        {singleJob && singleJob.location}
                                    </strong>
                                </li>
                                <li>
                                    <WatchLaterIcon /> <br /> &nbsp; {singleJob && singleJob.employmentType}
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Box
                            sx={{
                                minHeight: '35vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <h2>No result found!</h2>
                        </Box>
                    )}
                </Container>
                <ApplicationForm/>
            </div>
            <DymaxaFooter/>
        </>
    );
};

export default JobDescriptionPage;
