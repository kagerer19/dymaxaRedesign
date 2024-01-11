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
                    maxWidth: '800px', // Adjust the maximum width based on your design
                    margin: '0 auto', // Center the content
                    padding: '20px', // Add padding to the content
                }}
            >
                <h1 className="jobs-hero-text">Jobs</h1>
                <TextField variant="filled" label="Search Jobs" className={"search"} color="success"/>
                <JobsSearch />
            </div>
        </div>
    )
}

export default JobsHero;