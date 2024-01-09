import React from "react";
import JobsHeader from "../pages/Jobs.jsx";
import {TextField} from "@mui/material";

function Jobs() {
    return (
        <>
            <div className="jobs-hero-screen">
                <div className="absolute"></div>
                <div className="hero-content-jobs">
                    <h1 className="jobs-hero-text">Jobs</h1>
                    <TextField label="Search Jobs" className={"search"} Outlined secondary/>
                </div>
            </div>
        </>
    )
}

export default Jobs;