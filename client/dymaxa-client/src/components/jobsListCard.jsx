import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {jobLoadAction} from "../redux/actions/jobActions.js";


export const JobsListCard = () => {
    const {jobs} = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const {keyword, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);
    return (
            <Table size="large">
                <TableHead>
                    <TableRow>
                        <TableCell>Job Titile</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell align="right">Salery</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { jobs && jobs.map((job, i) => (
                        <TableRow>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.location}</TableCell>
                            <TableCell align="right">{`${job.salary}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    );
}

export default JobsListCard;