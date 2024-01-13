import React from "react";
import {TextField} from "@mui/material";
import JobsSearch from "./jobSearch.jsx";

function JobsHero() {
    return (
        <div className="jobs-hero-screen">
            <div className="absolute"></div>
            <div
                className="hero-content-jobs"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '20px',
                }}
            >
                <h1 className="jobs-hero-text">Jobs</h1>
                <p className="jobs-content">Find your Dream Job</p>
                <TextField variant="filled" label="Search Jobs" className={"search"} color="success"/>
                <JobsSearch />
            </div>
        </div>
    )
}

export default JobsHero;