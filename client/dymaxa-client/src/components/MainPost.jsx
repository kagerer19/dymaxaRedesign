import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import context from '../text-content/aboutContent.json'

export const MainPost = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundSize: 'cover',
                backgroundColor: "#FAF9F4",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: "url(https://res.cloudinary.com/diufjedfn/image/upload/f_auto,q_auto/mainAboutImg)"
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#f6f6f6",
                                fontSize: { xs: "2rem", md: "4rem" },
                                marginTop: {xs : "2rem", md: "9rem"},
                                marginBottom: {xs : "2rem", md: "9rem"},
                                marginLeft: {xs : "3rem", md: "30rem"},
                                lineHeight: { xs: "1.3", md: "1.3" },
                            }}
                            component="h1"
                            variant="h3"
                            gutterBottom
                        >
                            <span style={{ color: "#32FFCE", fontWeight: "bold" }}>TALENT</span> MEETS <br /> OPPORTUNITY
                        </Typography>
                    </Box>
            </Grid>

            </Grid>
        </Paper>
    );
}

export default MainPost;
