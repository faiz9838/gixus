/* eslint-disable react/prop-types */
import "react";
import { Box, Typography, Grid, CircularProgress, Container, Card, styled } from "@mui/material";
import { useEffect, useState } from "react"

const StepNumber = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'rgba(25, 118, 210, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 500,
    color: theme.palette.primary.main,
}));

const AnimatedCircularProgress = ({ value, color }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 300);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <Box position="relative" display="inline-flex" textAlign="center">
            <CircularProgress variant="determinate" value={100} size={120} thickness={1.6} sx={{ color: "#ccc" }} />

            {/* Animated Colored Progress */}
            <CircularProgress variant="determinate" value={progress} size={120} thickness={1.6} sx={{ color, position: "absolute" }} />

            {/* Percentage in Center */}
            <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: { xs: "white", md: "black" } }}
                >
                    {`${progress}%`}
                </Typography>
            </Box>
        </Box>
    );
};

const StepConnector = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "100%",
    width: "230%", // Default for md and above
    height: 1,
    borderTop: "2px dashed #ccc",


    [theme.breakpoints.down("md")]: {
        left: "50%",
        top: "100%",
        width: 1,
        height: "40px",
        borderTop: "none",
        borderLeft: "2px dashed #ccc",
    },
}));


const ProcessStep = ({ number, title, description, isLast }) => (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'row', md: "column" }, alignItems: 'flex-start', flex: 1, gap: { xs: 3 } }}>
        <Box sx={{ position: 'relative', mb: { xs: 0, sm: 0, md: 0 }, }}> {/* Reduced margin-bottom */}
            <StepNumber>
                {number.padStart(2, '0')}
                {!isLast && <StepConnector />}
            </StepNumber>
        </Box>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'column' }, alignItems: 'flex-start', flex: 1 }}>
            <Typography variant="h5" fontWeight={700} paddingBottom={1} sx={{ mb: 0.2, fontWeight: 500 }}> {/* Reduced bottom margin */}
                {title}
            </Typography>
            <Typography fontWeight={500} fontSize={{ xs: ".7rem" }} color="text.secondary" sx={{ maxWidth: '90%' }}>
                {description}
            </Typography>
        </Box>
    </Box >
);

const ExperienceSection = () => {

    return (
        <Box position="relative" sx={{
            minHeight: "auto",
            overflow: "hidden"
        }}>
            {/* Top Section */}
            <Grid container height={{ xs: "auto", sm: "auto", md: "130vh" }} >
                <Grid item xs={12} md={6} sx={{
                    backgroundColor: "#1f2b38",
                    color: "white",
                    p: 6,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {
                        xs: "center", sm: "center", md: "flex-start"
                    }, // Centers vertically
                    // Aligns content to the left
                    textAlign: "left", // Ensures text aligns left

                }
                } >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            margin: "0 auto",
                            textAlign: { xs: "center", sm: "center", md: "left" },
                            gap: 0,
                            paddingLeft: 6,
                        }}
                    >
                        <Typography sx={{
                            fontSize: "8rem",
                            fontWeight: 600,
                            color: "#246bfd"
                        }}
                        >
                            26
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" marginTop={-3}>
                            Years of Experience
                        </Typography>
                    </Box>

                </Grid>


                <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: { xs: "center", md: "flex-start" }, justifyContent: { xs: "center", sm: "center", md: "center" }, flexDirection: { xs: "column", sm: "column", md: "row" }, p: 6, backgroundColor: { xs: "#1f2b38", sm: "#1f2b38", md: "#f7f7f7" }, gap: { xs: 2, sm: 2, md: 6 }, }}> {/* Adjusted padding */}
                    <Box display="flex" flexDirection={{ xs: "column", sm: "column", md: "row" }} alignItems="center" gap={{ xs: 2, sm: 6, md: 8 }} >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            paddingTop: { xs: 9, sm: 0, md: 6 }
                        }}>
                            <AnimatedCircularProgress value={65} color="#3B82F6" label="Business Development" />
                            <Typography variant="h6" fontWeight="bold" color={{ xs: "white", md: "black" }}>Business Development</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 2,
                                paddingTop: { xs: 9, sm: 0, md: 6 }
                            }}
                        >
                            <AnimatedCircularProgress value={84} color="#6B21A8" label="Investment Analysis" />
                            <Typography variant="h6" fontWeight="bold" color={{ xs: "white", md: "black" }}>Investment Analysis</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom Section */}
            <Container
                maxWidth='lg'
                sx={{
                    position: { xs: "relative", sm: "relative", md: "absolute" },
                    bottom: "0%", // Slightly overlapping the blue section
                    left: { xs: "0%", sm: "0%", md: "60%" },
                    transform: { xs: "translateX(0%)", sm: "translateX(0%)", md: "translateX(-50%)" },
                    width: "100%",
                    borderRadius: 0,
                    backgroundColor: { xs: "#1f2b38", sm: "#1f2b38", md: "#1f2b38" },
                    display: "flex",
                    justifyContent: "center"

                }}
            >
                <Card
                    sx={{
                        p: 5,
                        width: { xs: 550, sm: 550, md: "auto" },
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: 3, md: 0 },
                        }}
                    >

                        <Box sx={{ flex: "0 0 35%" }}>
                            <Typography
                                variant="1"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "3rem", md: "3rem" },
                                    lineHeight: 1.2,
                                    mb: { xs: 3, md: 0 },

                                    paddingLeft: 2,
                                    paddingRight: 8
                                }}
                            >
                                Building

                                great future

                                Together,

                                Be with us
                            </Typography>
                        </Box>


                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 2,
                                flex: "0 0 50%",
                                p: 3,
                            }}
                        >
                            <ProcessStep
                                number="1"
                                title="Information Collection"
                                description="Excuse Deal say over contain performance from comparison new melancholy themselves."
                            />
                            <ProcessStep
                                number="2"
                                title="Projection Report Analysis"
                                description="Excuse Deal say over contain performance from comparison new melancholy themselves."
                            />
                            <ProcessStep
                                number="3"
                                title="Consultation Solution"
                                description="Excuse Deal say over contain performance from comparison new melancholy themselves."
                            />
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Box >
    );
};

export default ExperienceSection;
