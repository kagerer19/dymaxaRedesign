import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import context from '../text-content/aboutContent.json'
import PageSeparator from "./PageSeparator.jsx";

export const AboutUs = () => {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Box
                    sx={{
                        p: {xs: 3, md: 2},
                        pr: {md: 0},
                        textAlign: "center"
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            fontSize: {xs: "1.5rem", md: "4rem"},
                            marginTop: {xs: "1rem", md: "2rem"},
                            marginLeft: {xs: "0", md: "auto"},
                            marginRight: {xs: "0", md: "auto"},
                            lineHeight: {xs: "1.3", md: "1.3"},
                        }}
                    >
                        {context.about.heading}
                    </Typography>
                </Box>
                <PageSeparator />
                <Box
                    sx={{
                        p: { xs: 1, md: 6 },
                        pr: { md: 0 },
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <Typography
                        sx={{
                            color: "rgba(0,0,0,0.89)",
                            lineHeight: { xs: "1.3", md: "1.3" },
                        }}
                    >
                        {context.about.description.paragraphs.map((paragraph, index) => (
                            <Typography key={index} component="span" sx={{display: 'block', fontSize: { xs: "1em", md: "1.5em" },  }}>
                                {paragraph}
                            </Typography>
                        ))}
                    </Typography>
                </Box>
            </Grid>
    <PageSeparator />
        </Grid>
    );
}

export default AboutUs;
