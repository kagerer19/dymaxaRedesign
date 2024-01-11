import React from "react";
import NavRecruit from "../components/Nav-recruit.jsx";
import NavAupair from "../components/Nav-aupair.jsx";
import JobsHero from "../components/JobsHero.jsx";
import {Box, Card, Container, Stack, Typography} from "@mui/material";
import {palette} from "@mui/system";

const Jobs = () => {
    return (
        <>
            <header
                className="px-4 md:px-6 h-16 md:h-20 flex justify-around items-center bg-[#F8F7F2] text-gray-700 border-b-2 border-[#7bf1a8]">
                <div className="flex items-center mb-2 md:mb-0 align-middle">
                    <img className={"header-logo md:mt-0 mt-3"} src={"src/assets/Dymaxa-logo.png"}
                         alt={"Four leaf clover"}/>
                    <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 mb-1 hover:text-gray-300"
                       href="#">
                        <span className="hidden md:inline text-black">Dymaxa Recruiting</span>
                    </a>
                </div>
                <div className="flex gap-5">
                    <NavRecruit/>
                    <NavAupair/>
                </div>
            </header>
            <JobsHero />
            <Container sx={{ marginLeft: '2rem' }}>
                <Stack
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={{xs: 1, sm: 2, md: 4}}

                >
                    <Box sx={{flex: 2, p: 2}}>
                        <Card sx={{minWidth: 150, mb: 3, mt: 3, p: 2, backgroundColor: '#F8F7F2'}}>
                            <Box sx={{pb: 2}}>
                                <Typography component="h4" sx={{color: '#4a5568', fontWeight: 600}}>
                                    Filter job by category
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box sx={{flex: 5, p: 2}}>

                    </Box>

                </Stack>
            </Container>
        </>
    );
};

export default Jobs;