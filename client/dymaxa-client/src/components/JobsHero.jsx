import React from "react";
import JobsHeader from "../pages/Jobs.jsx";
import {TextField} from "@mui/material";
import JobsSearch from "./jobSearch.jsx";

function Jobs() {
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
                <TextField label="Search Jobs" className={"search"} Outlined secondary/>
                <JobsSearch />
            </div>
        </div>
    )
}

export default Jobs;